import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        work: resolve(__dirname, 'work.html'),
        project: resolve(__dirname, 'project.html'),
        contact: resolve(__dirname, 'contact.html'),
        invotools: resolve(__dirname, 'invotools.html'),
        ayatacommerce: resolve(__dirname, 'ayatacommerce.html'),
        eva: resolve(__dirname, 'eva.html'),
        aashalfoods: resolve(__dirname, 'aashalfoods.html'),
        wealthcreatorz: resolve(__dirname, 'wealthcreatorz.html'),
        rupeefunds: resolve(__dirname, 'rupeefunds.html'),
      },
    },
    assetsInclude: [
      '**/*.jpeg',
      '**/*.jpg',
      '**/*.png',
      '**/*.svg',
      '**/*.gif',
    ],
    copyPublicDir: true,
  },
});
