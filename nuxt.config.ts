// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import {createUnitDataModel} from "./utils/UnitData.Utils";


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: () => {
        const units = createUnitDataModel();
        const unitIds = units.map(unit => unit.id);

        return unitIds.flatMap(from =>
          unitIds
            .filter(to => from !== to)
            .map(to => `/convert/${from}-to-${to}`)
        );
      }
    }
  },
  modules: [
    '@nuxtjs/i18n',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    //'@nuxtjs/eslint-module',
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
    lintOnStart: false,
    fix: true,
  },
})