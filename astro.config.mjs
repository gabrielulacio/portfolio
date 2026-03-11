// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://gabrielulacio.vercel.app/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    icon({
      include: {
        mdi: ['*'],
        'simple-icons': ['*'],
      },
    }),
  ],
});