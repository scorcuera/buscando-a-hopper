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
  site: 'https://github.com/scorcuera.io',
  base: 'buscando-a-hopper',
});
