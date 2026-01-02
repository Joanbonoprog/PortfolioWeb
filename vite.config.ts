import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Permite acceso desde cualquier host
    port: 4321,
    strictPort: false,
    // Configuración para dominios personalizados
    hmr: {
      clientPort: 443, // Para HTTPS en producción
    },
    // Permite CORS para dominios externos
    cors: true,
  },
  preview: {
    host: true,
    port: 4321,
    allowedHosts: ['joanbonoprog.es'],
  },
  // Configuración de base para subdominios o rutas
  base: '/',
});
