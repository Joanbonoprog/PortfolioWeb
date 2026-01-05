import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
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

const server = createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);
  
  let filePath = join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
  
  // Remove query strings
  filePath = filePath.split('?')[0];
  
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
  
  try {
    const content = readFileSync(filePath);
    res.writeHead(200, { 
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=0'
    });
    res.end(content);
    console.log(`Served: ${filePath}`);
  } catch (error) {
    console.error(`Error serving ${filePath}:`, error.message);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server running at http://0.0.0.0:${PORT}/`);
  console.log(`✓ Ready to accept connections`);
});
