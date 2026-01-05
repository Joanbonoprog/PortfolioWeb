import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 4321,
    strictPort: false,
    cors: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4321,
    strictPort: false,
    allowedHosts: ['joanbonoprog.es', 'www.joanbonoprog.es', '.joanbonoprog.es'],
  },
  base: '/',
});
