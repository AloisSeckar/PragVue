// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-gtag',
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
})
