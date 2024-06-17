import en from '@/assets/en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en },
  warnHtmlMessage: false,
  detectBrowserLanguage: {
    useCookie: false,
  },
}))
