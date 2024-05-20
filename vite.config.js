// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  // Specify the root directory of your application
  root: './',

  // Specify the public directory (where index.html is located)
  publicDir: 'public',

  // Enable or disable SSR (Server-Side Rendering)
  ssr: false,

  // Specify ESBuild target (ES version for transpilation)
  esbuild: {
    target: 'es2020'
  },

  // Specify additional file extensions for module resolution
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs']
  },

  // Specify optimizations and plugins
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['lodash']
  },

  // Additional configuration options...
});
