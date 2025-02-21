// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    '@nuxt/eslint',
    '@pinia/nuxt'
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
    }
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  fontawesome: {
    icons: {
      solid: ['cog', 'trash', 'right-left' ],
    },
    component: 'Icon',
  },
  eslint: {
    lintOnStart: false, // You can set this to 'true' if you want linting to happen on start
    fix: true,           // Automatically fix linting issues
  },
})