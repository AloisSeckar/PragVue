// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  devtools: {
    enabled: false,
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-08-05',

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
