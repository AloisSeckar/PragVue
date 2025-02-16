// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  devtools: {
    enabled: false,
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-02-10',

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        noImplicitOverride: true,
        noImplicitAny: true,
        noImplicitThis: true,
        strictFunctionTypes: true,
        strictNullChecks: true,
        noUncheckedIndexedAccess: true,
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    lazy: true,
    defaultLocale: 'en',
    types: 'composition',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en.json',
      },
      /*
      {
        code: 'cs',
        language: 'cs-CZ',
        file: 'cs.json',
      },
      */
    ],
    experimental: {
      typedOptionsAndMessages: 'default',
    },
    compilation: {
      strictMessage: false,
    },
  },

  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-DGF1H9DLEK',
      },
      googleTagManager: {
        id: 'GTM-54QNGDB7',
      },
    },
  },

})
