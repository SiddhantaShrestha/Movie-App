import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // IMPORTANT: project page uses /Movie-App/ as base
  base: '/Movie-App/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs', // GitHub Pages will serve from /docs on main
    emptyOutDir: true,
  },
});
