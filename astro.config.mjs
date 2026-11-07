import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.url,
  vite: { plugins: [tailwindcss()] },
});
