// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import {createUnitDataModel} from "./utils/UnitData.Utils";


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: (): string[] => {
        const unitDataModel = createUnitDataModel(); // Should return { length: Unit[], weight: Unit[], ... }

        if (!unitDataModel || typeof unitDataModel !== "object") {
          console.warn("Invalid unitDataModel structure");
          return [];
        }

        return Object.entries(unitDataModel).flatMap(([type, units]) => {
          if (!Array.isArray(units)) {
            console.warn(`Skipping invalid unit type: ${type}`);
            return [];
          }

          return units.flatMap(from =>
            units
              .filter(to => from.id !== to.id)
              .map(to => `/convert/${type}/${from.id}-to-${to.id}`)
          );
        });
      }
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
    fix: true,
    lintOnStart: false,
  },
})