// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-05',

  future: {
    compatibilityVersion: 4,
  },

  devtools: {
    enabled: false,
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@vueuse/nuxt',
  ],

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

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  i18n: {
    defaultLocale: 'en',
    types: 'composition',
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en.json',
      },
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
