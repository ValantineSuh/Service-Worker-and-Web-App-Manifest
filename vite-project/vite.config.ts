import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'PWA',
        short_name: 'PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: './public/icon32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: './public/icon48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: './public/icon310x310.png',
            sizes: '310x310',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: './public/icon144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      external: ['/src/main.jsx'],
    },
  },
});