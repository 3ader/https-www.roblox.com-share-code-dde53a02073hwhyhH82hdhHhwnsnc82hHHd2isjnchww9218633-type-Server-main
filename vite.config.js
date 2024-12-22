import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Root folder for your files (where `index.html` is located)
  server: {
    host: true, // Allows external access if needed
    port: 3000, // You can change this port if necessary
  },
  build: {
    outDir: 'dist', // Output directory for build files
  },
});
