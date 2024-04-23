// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt',
  ],
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
})
