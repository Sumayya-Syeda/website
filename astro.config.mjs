import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sumayya-syeda.github.io',
  base: '/website',
  integrations: [tailwind()],
});
