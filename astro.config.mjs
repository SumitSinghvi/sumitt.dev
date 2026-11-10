import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.url,
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
