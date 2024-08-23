// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-05',

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

  eslint: {
    config: {
      stylistic: true,
    },
  },

  colorMode: {
    preference: 'light',
  },

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  scripts: {
    globals: {
      myScript: ['https://app.termly.io/resource-blocker/bbc9f62b-96e1-4064-bea5-e604bb669e55?autoBlock=on', {
        bundle: true,
        trigger: 'onNuxtReady',
      }],
    },
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
