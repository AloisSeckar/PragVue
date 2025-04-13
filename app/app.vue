<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'bg-secondary',
  },
  script: [
    {
      key: 'termly-script',
      src: 'https://app.termly.io/resource-blocker/bbc9f62b-96e1-4064-bea5-e604bb669e55?autoBlock=on',
    },
  ],
})

useSeoMeta({
  title: 'PragVue 2025',
  description:
    '2nd annual Vue.js conference in Prague, Czechia (23rd September 2025)',
  ogType: 'website',
  ogUrl: 'https://pragvue.com/',
  ogTitle: 'PragVue 2025',
  ogDescription:
    '2nd annual Vue.js conference in Prague, Czechia (23rd September 2025)',
  ogImage: 'https://pragvue.com/pragvue.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
