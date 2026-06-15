<template>
  <div>
    <Year2025HeroBanner />

    <a id="info" />
    <LazyConferenceInfo hydrate-on-visible />

    <a id="speakers" />
    <LazyConferenceSpeakers hydrate-on-visible />

    <a id="gallery" />
    <LazyConferenceGallery hydrate-on-visible />

    <LazyConferenceVenue hydrate-on-visible />

    <LazyConferencePrague hydrate-on-visible />

    <LazyConferenceSponsors hydrate-on-visible />
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
