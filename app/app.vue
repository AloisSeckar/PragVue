<template>
  <NuxtPage />
  <LayoutContainer tag="footer">
    <LayoutContainerContent size-y="small">
      <div class="font-mono font-semibold text-center text-woodsmoke-300 text-lg before:content-['<!--_'] after:content-['_-->']">
        © <UiPragVue :year />
      </div>
      <div class="text-xs text-center">
        Powered by
        <NuxtLink to="https://github.com/AloisSeckar/nuxt-ignis" class="text-vue hover:text-vue-light">
          nuxt-ignis
        </NuxtLink>
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'bg-woodsmoke-900',
  },
  script: [{ src: 'https://app.termly.io/resource-blocker/bbc9f62b-96e1-4064-bea5-e604bb669e55?autoBlock=on' }],
})

useSeoMeta({
  title: 'PragVue 2025',
  description: '2nd annual Vue.js conference in Prague, Czechia (23rd September 2025)',
  ogType: 'website',
  ogUrl: 'https://pragvue.com/',
  ogTitle: 'PragVue 2025',
  ogDescription: '2nd annual Vue.js conference in Prague, Czechia (23rd September 2025)',
  ogImage: 'https://pragvue.com/pragvue.jpg',
  twitterCard: 'summary_large_image',
})

const year = useState(() => new Date().getFullYear())
</script>

<style>
html {
  scroll-behavior: smooth;
  color: #dddddd;
  font-family: "Montserrat", sans-serif;
}
</style>
