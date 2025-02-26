// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import {fileURLToPath} from "mlly";
import {getRoutesForPreRendering} from "./utils/PreRenderer.Utils";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/tailwind.css',
    '~/assets/primevue/tailwind.css',
    '~/assets/main.css',
  ],
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)), // This makes `@/` point to the root directory
  },
  nitro: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./", import.meta.url)), // Ensures alias works in Nitro
      },
    },
    prerender: {
      routes: (() => {
        return getRoutesForPreRendering()
      })(),
    }
  },
  modules: [
    '@nuxtjs/i18n',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module'
  ],
  i18n: {
    langDir: '',
    locale: 'en',
    locales: [
      { "code": "en", "language": 'en-US', "file": "en.json", "dir": "ltr" }
    ]
  },
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    plugins: [require('tailwindcss-primeui')]
  },
  fontawesome: {
    icons: {
      solid: ['cog', 'trash', 'right-left', 'circle-check' ],
    },
    component: 'Icon',
  },
  eslint: {
    fix: true,
    lintOnStart: false,
  },
})