<template>
  <div>
    <Year2025Header />

    <a id="info" />
    <LazyYear2025Info hydrate-on-visible />

    <a id="speakers" />
    <LazyYear2025Speakers hydrate-on-visible />

    <a id="gallery" />
    <LazyYear2025Gallery hydrate-on-visible />

    <LazyYear2025Venue hydrate-on-visible />

    <LazyYear2025Sponsors hydrate-on-visible />

    <UiBacklink />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'PragVue 2025',
  description: '2nd annual Vue.js conference in Prague, Czechia (23rd September 2025)',
  ogType: 'website',
  ogUrl: 'https://pragvue.com/',
  ogTitle: 'PragVue 2025',
  ogDescription: '2nd annual Vue.js conference in Prague, Czechia (23rd September 2025)',
  ogImage: 'https://pragvue.com/pragvue2025.jpg',
  twitterCard: 'summary_large_image',
})
</script>
