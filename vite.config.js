import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Ensure source maps are enabled
  },
  server: {
    port: 8080, // Specify the port your Vite app will run on
  },
});
