<template>
  <NuxtPage />
  <LayoutContainer tag="footer">
    <LayoutContainerContent size-y="small">
      <div class="text-woodsmoke-700 font-default font-semibold text-center text-lg pgv-html-comment">
        <span class="text-woodsmoke-400">
          PragVue © {{ year }}
        </span>
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
  ogDescription: '2nd annual Vue.js conference in Prague, Czechia (23rd September 2024)',
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

.pgv-html-comment:before {
  content: '<!-- ';
  color: #7b7b7b;
}

.pgv-html-comment:after {
  content: ' -->';
  color: #7b7b7b;
}
</style>
