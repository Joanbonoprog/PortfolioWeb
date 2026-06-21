import { createServer } from 'node:http';
import { readFile, existsSync, statSync } from 'node:fs';
import { join, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;
const DIST_DIR = join(__dirname, 'dist');

console.log(`Starting server on port ${PORT}`);
console.log(`Serving files from ${DIST_DIR}`);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
};

const DIST_DIR_RESOLVED = resolve(DIST_DIR);

// Rate Limiting: Track requests per IP
const requestCounts = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 peticiones por minuto

// Extensiones de assets estáticos: no se contabilizan en el rate limit
// para no penalizar a crawlers que cargan la página con todos sus recursos.
const STATIC_ASSET_EXTENSIONS = new Set([
  '.js', '.mjs', '.css', '.json', '.xml', '.txt', '.pdf',
  '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp',
  '.woff', '.woff2', '.ttf',
]);

// User-agents de crawlers de IA/buscadores que quedan exentos del rate limit
// para garantizar que todos los modelos puedan indexar y leer el sitio.
const AI_BOT_USER_AGENTS = [
  'gptbot', 'oai-searchbot', 'chatgpt-user', 'claudebot', 'claude-web',
  'anthropic-ai', 'perplexitybot', 'google-extended', 'googlebot', 'bingbot',
  'applebot', 'ccbot', 'bytespider', 'meta-externalagent', 'cohere-ai',
  'diffbot', 'duckassistbot', 'youbot', 'amazonbot', 'mistralai-user',
];

function isAiBot(userAgent) {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return AI_BOT_USER_AGENTS.some((bot) => ua.includes(bot));
}

// Limpiar registros antiguos cada 5 minutos
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of requestCounts.entries()) {
    if (now - data.resetTime > RATE_LIMIT_WINDOW) {
      requestCounts.delete(ip);
    }
  }
}, 5 * 60 * 1000);

function checkRateLimit(ip) {
  const now = Date.now();
  const record = requestCounts.get(ip);
  
  if (!record) {
    // Primera petición de esta IP
    requestCounts.set(ip, {
      count: 1,
      resetTime: now
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }
  
  // Verificar si la ventana de tiempo ha expirado
  if (now - record.resetTime > RATE_LIMIT_WINDOW) {
    // Resetear contador
    record.count = 1;
    record.resetTime = now;
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }
  
  // Incrementar contador
  record.count++;
  
  if (record.count > RATE_LIMIT_MAX_REQUESTS) {
    const retryAfter = Math.ceil((RATE_LIMIT_WINDOW - (now - record.resetTime)) / 1000);
    return { allowed: false, retryAfter };
  }
  
  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - record.count };
}

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  // NOTA: script-src mantiene 'unsafe-inline' porque Astro inyecta inline los
  // scripts de módulo pequeños. Para eliminarlo de forma segura habría que activar
  // security.csp de Astro (hashes), lo que obliga a quitar TODOS los style="" inline
  // (también incompatibles con 'unsafe-inline' de style-src). Es un refactor aparte.
  'Content-Security-Policy':
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline'; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; " +
    "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; " +
    "img-src 'self' data: https://cdn.jsdelivr.net https://astro.build https://static.licdn.com https://github.githubassets.com https://artimark.es; " +
    "connect-src 'self'; " +
    "base-uri 'self'; " +
    "form-action 'self'; " +
    "frame-ancestors 'none'; " +
    "upgrade-insecure-requests;"
};

const server = createServer((req, res) => {
  // Obtener IP del cliente (considerando proxies)
  const clientIp = req.headers['x-forwarded-for']?.split(',')[0].trim() || 
                   req.headers['x-real-ip'] || 
                   req.socket.remoteAddress;
  
  // Determinar exenciones del rate limit:
  // - Bots de IA/buscadores conocidos (para garantizar el acceso de los LLMs)
  // - Assets estáticos (no penalizar la carga completa de la página)
  const userAgent = req.headers['user-agent'] || '';
  const requestExt = extname((req.url || '/').split('?')[0]).toLowerCase();
  const skipRateLimit = isAiBot(userAgent) || STATIC_ASSET_EXTENSIONS.has(requestExt);

  // Verificar rate limit (salvo exenciones)
  let rateLimitResult = { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS };
  if (!skipRateLimit) {
    rateLimitResult = checkRateLimit(clientIp);

    if (!rateLimitResult.allowed) {
      console.warn(`[Rate Limit] IP ${clientIp} exceeded limit. Retry after ${rateLimitResult.retryAfter}s`);
      res.writeHead(429, {
        'Content-Type': 'application/json',
        'Retry-After': rateLimitResult.retryAfter,
        'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS,
        'X-RateLimit-Remaining': 0,
        'X-RateLimit-Reset': new Date(Date.now() + rateLimitResult.retryAfter * 1000).toISOString(),
        ...SECURITY_HEADERS
      });
      res.end(JSON.stringify({
        error: 'Too Many Requests',
        message: `Rate limit exceeded. Please try again in ${rateLimitResult.retryAfter} seconds.`,
        retryAfter: rateLimitResult.retryAfter
      }));
      return;
    }
  }
  
  let rawUrl = req.url === '/' ? '/index.html' : req.url;
  // Remove query strings before decoding to avoid decoding '?' or '&' in params
  rawUrl = rawUrl.split('?')[0];
  let filePath;
  try {
    filePath = join(DIST_DIR, decodeURIComponent(rawUrl));
  } catch {
    // decodeURIComponent throws on malformed sequences — treat as 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }
  
  // Path Traversal guard: ensure resolved path stays within dist/
  const resolvedPath = resolve(filePath);
  if (!resolvedPath.startsWith(DIST_DIR_RESOLVED + sep) &&
      resolvedPath !== DIST_DIR_RESOLVED) {
    res.writeHead(403, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
    res.end('Forbidden');
    return;
  }
  filePath = resolvedPath;

  // Check if file exists
  let statusCode = 200;
  if (!existsSync(filePath)) {
    // Try with .html extension
    if (!filePath.endsWith('.html') && existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else {
      // Ruta inexistente: servir la página 404 con su estado HTTP correcto
      filePath = join(DIST_DIR, '404.html');
      statusCode = 404;
    }
  }
  
  // Check if it's a directory
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html');
  }
  
  const ext = extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
      res.end('Not Found');
      return;
    }
    res.writeHead(statusCode, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=0',
      'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS,
      'X-RateLimit-Remaining': rateLimitResult.remaining,
      ...SECURITY_HEADERS
    });
    res.end(content);
  });
});

server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server running at http://0.0.0.0:${PORT}/`);
  console.log(`✓ Ready to accept connections`);
});
