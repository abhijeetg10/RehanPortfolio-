import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Universal relative base for GitHub Pages, Vercel, and custom domains
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-ui': ['lucide-react', 'clsx', 'tailwind-merge', 'canvas-confetti'],
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
  server: {
    port: 3000,
  },
});
