// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alvianputra.my.id',
  output: 'static',
  vite: {
    // Cast: @tailwindcss/vite memakai tipe Vite yang lebih baru dari Vite bawaan Astro 5.
    // Hanya beda tipe TypeScript — plugin tetap berjalan normal.
    plugins: [/** @type {any} */ (tailwindcss())],
    css: {
      // Config inline = Vite TIDAK mencari postcss.config.js di folder induk
      // (folder Laravel punya postcss.config.js sendiri yang memakai Tailwind v3).
      postcss: {},
    },
  },
});
