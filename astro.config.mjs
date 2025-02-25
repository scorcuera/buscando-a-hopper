// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
    },
    ssr: {
    }
  },
  site: 'https://scorcuera.github.io',
  base: '/buscando-a-hopper',
});
