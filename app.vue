<template>
  <div>
    <TheIntro />
    <TheIdea />
    <TheSchedule />
    <TheFeatures />
    <TheTicket />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'PragVue 2024',
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<style>
html {
  scroll-behavior: smooth;
  color: #dddddd;
  font-family: "Montserrat", Sans-serif;
}
</style>
