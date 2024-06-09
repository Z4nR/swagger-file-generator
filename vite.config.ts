import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/swagger-file-generator',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        theme_color: '#ffffff',
        background_color: '#008080',
        display: 'standalone',
        scope: '/swagger-file-generator',
        start_url: '/swagger-file-generator',
        description:
          'SwagGen is website to simplify the process when creating swagger file',
        name: 'SwagGen: Swagger File Generator',
        short_name: 'SwagGen',
        icons: [
          {
            src: '/WhatColors/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '/WhatColors/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/WhatColors/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/WhatColors/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{ts,css,html,ico,png,svg}'],
        clientsClaim: true,
        skipWaiting: true,
        sourcemap: false,
      },
    }),
  ],
});
