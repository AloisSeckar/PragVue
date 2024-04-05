<template>
  <div class="text-center mb-2">
    <img
      src="/flag-en.png"
      alt="EN"
      title="English"
      :class="locale === 'en' ? selectedLang : lang"
      @click="setLocale('en')"
    >
    <img
      src="/flag-cs.png"
      alt="CS"
      title="Čeština"
      :class="locale === 'cs' ? selectedLang : lang"
      @click="setLocale('cs')"
    >
  </div>
</template>

<script setup lang="ts">
const lang = 'w-6 h-4 m-1 inline-block'
const selectedLang = 'w-6 h-4 m-1 inline-block border-2 border-amber-300'

const { locale } = useI18n()

function setLocale(newLocale: string) {
  if (newLocale) {
    const storedLocale = useLocalStorage('pragvue-lang', 'en')
    storedLocale.value = newLocale
    locale.value = newLocale
  }
}
</script>
