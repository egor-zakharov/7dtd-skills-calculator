import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const srcPath = decodeURIComponent(new URL('./src', import.meta.url).pathname).replace(
  /^\/([A-Za-z]:)/,
  '$1',
);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': srcPath,
    },
  },
  assetsInclude: ['/assets/**/*.png', '/assets/**/*.jpg', '/assets/**/*.jpeg', '/assets/**/*.svg'],
  base: '/7dtd-skills-calculator/',
});
