import {
  defineConfig,
  minimal2023Preset,
} from '@vite-pwa/assets-generator/config';

export default defineConfig({
  headLinkOptions: {
    preset: '2023',
  },
  preset: {
    ...minimal2023Preset,
    png: {
      compressionLevel: 9,
      quality: 85,
    },
  },
  images: ['public/vite.svg'],
});
