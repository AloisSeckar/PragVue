<template>
  <div>
    <TheIntro />
    <TheIdea />
    <TheSchedule />
    <TheFeatures />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const storedLocale = useLocalStorage('pragvue-lang', 'en')

if (storedLocale.value && typeof storedLocale.value === 'string') {
  locale.value = storedLocale.value
}

useHead({
  title: 'PragVue 2024',
  htmlAttrs: {
    lang: locale,
  },
})
</script>

<style>
html {
  scroll-behavior: smooth;
  color: #dddddd;
}
</style>
