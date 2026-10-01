<template>
  <NuxtPage />
  <TheFooter />
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-woodsmoke-900',
  },
  script: [{ src: 'https://app.termly.io/resource-blocker/bbc9f62b-96e1-4064-bea5-e604bb669e55?autoBlock=on', defer: true }],
})

useSeoMeta({
  title: 'PragVue',
  description: 'The Czech Vue.js conference',
  ogType: 'website',
  ogUrl: 'https://pragvue.com/',
  ogTitle: 'PragVue',
  ogDescription: 'The Czech Vue.js conference',
  ogImage: 'https://pragvue.com/pragvue.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style>
html {
  scroll-behavior: smooth;
  font-family: "Montserrat", sans-serif;
}
</style>
