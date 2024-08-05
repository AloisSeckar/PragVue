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
</script>

<style>
html {
  scroll-behavior: smooth;
  color: #dddddd;
  font-family: "Montserrat", Sans-serif;
}
</style>
