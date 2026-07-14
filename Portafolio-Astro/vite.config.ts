import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4321,
    strictPort: false,
  },
  preview: {
    host: '0.0.0.0',
    strictPort: false,
    proxy: {},
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  base: '/',
  appType: 'mpa',
});
