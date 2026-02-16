import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/hamzajashari/",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    port: 8080, 
  },
});
