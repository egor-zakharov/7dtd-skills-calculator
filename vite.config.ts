import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  assetsInclude: ['/assets/**/*.png', '/assets/**/*.jpg', '/assets/**/*.jpeg', '/assets/**/*.svg'],
  base: '/7dtd-skills-calculator/',
});