<template>
  <div>
    <ConferenceHeader />
    <ConferenceIntroduction />
    <LazyConferenceInfo />
    <LazyConferenceNewsletter />
    <LazyConferenceSpeakers />
    <LazyConferenceSchedule />
    <LazyConferenceHackathon />
    <LazyConferenceVenue />
    <LazyConferencePrague />
    <LazyYear2026Past />
    <LazyConferenceSponsors />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'PragVue 2026',
  description: '3rd annual Vue.js conference in Prague, Czechia (29 September 2026)',
  ogType: 'website',
  ogUrl: 'https://pragvue.com/',
  ogTitle: 'PragVue 2026',
  ogDescription: '3rd annual Vue.js conference in Prague, Czechia (29 September 2026)',
  ogImage: 'https://pragvue.com/pragvue2026.jpg',
  twitterCard: 'summary_large_image',
})
</script>
