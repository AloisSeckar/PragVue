// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  extends: [
    'nuxt-ignis',
  ],

  devtools: {
    enabled: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    prerender: {
      routes: ['/', '/2024'],
    },
  },

  /*
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
  */

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

  security: {
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        'img-src': ['\'self\'', 'www.facebook.com', 'github.com', 'avatars.githubusercontent.com'],
        'script-src': ['\'self\'', 'https://app.termly.io/resource-blocker/bbc9f62b-96e1-4064-bea5-e604bb669e55?autoBlock=on', 'https://www.googletagmanager.com/gtag/js?id=G-DGF1H9DLEK'],
      },
    },
  },

})
