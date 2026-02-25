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

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy':
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline'; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https://cdn.jsdelivr.net https://astro.build; " +
    "connect-src 'self';"
};

const server = createServer((req, res) => {
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
  if (!existsSync(filePath)) {
    // Try with .html extension
    if (!filePath.endsWith('.html') && existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else {
      // Serve index.html for SPA routing
      filePath = join(DIST_DIR, 'index.html');
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
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=0',
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
