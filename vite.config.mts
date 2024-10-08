import dns from 'node:dns';
import { defineConfig } from 'vite';

dns.setDefaultResultOrder('verbatim');

export default defineConfig(() => {
  return {
    base: './',
    build: {
      chunkSizeWarningLimit: 3000,
      emptyOutDir: true,
      outDir: './website',
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    preview: {
      port: 8080
    },
    server: {
      port: 8080,
      cors: true,
      host: 'localhost',
      hmr: {
        clientPort: 8080,
      },
      watch: {
        followSymlinks: false,
      }
    },
  };
});