// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import {createUnitDataModel} from "./utils/UnitData.Utils";
import {fileURLToPath} from "mlly";

const locales = ["en"];

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
        const unitDataModel = createUnitDataModel(); // Should return { length: UnitGroup[], weight: UnitGroup[], ... }

        if (!unitDataModel || typeof unitDataModel !== "object") {
          console.warn("Invalid unitDataModel structure");
          return [];
        }
        return locales.flatMap(locale => {
          return Object.entries(unitDataModel).flatMap(([type, unitTypeObject]) => {
            if (!Array.isArray(unitTypeObject.unitGroups)) {
              console.warn(`Skipping invalid unit type: ${type}`);
              return [];
            }

            return unitTypeObject.unitGroups.flatMap(group => {
              if (!Array.isArray(group.items)) {
                console.warn(`Skipping invalid unit group: ${group.label}`);
                return [];
              }

              return group.items.flatMap(from =>
                group.items
                  
                  .filter(to => from.id !== to.id)
                  .map(to => `/${locale}/convert/${type}/${from.id}-to-${to.id}`)
              );
            });
          });
        });
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