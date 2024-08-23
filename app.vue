<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})

useSeoMeta({
  title: 'PragVue 2024',
  description: 'The first Czech Vue.js conference in Prague (17th September 2024)',
  ogType: 'website',
  ogUrl: 'https://pragvue.com/',
  ogTitle: 'PragVue 2024',
  ogDescription: 'The first Czech Vue.js conference in Prague (17th September 2024)',
  ogImage: 'https://pragvue.com/pragvue.jpg',
  twitterCard: 'summary_large_image',
})

useScript('https://app.termly.io/resource-blocker/bbc9f62b-96e1-4064-bea5-e604bb669e55?autoBlock=on', {
  bundle: true,
  trigger: 'onNuxtReady',
})
</script>

<style>
html {
  scroll-behavior: smooth;
  color: #dddddd;
  font-family: "Montserrat", Sans-serif;
}
</style>
