<template>
  <div>
    <LayoutContainer>
        <UiBacklink class="mb-6" />

        <Year2024UiHeading class="mb-12 text-center text-vue-light">
          {{ $t('year.2024.title') }}
        </Year2024UiHeading>

        <i18n-t
          tag="p"
          scope="global"
          keypath="year.2024.about"
          class="mb-8 tracking-[0.01em] max-w-[128ch] text-center text-balance"
        />

        <UiImage
          class="mb-10 mx-auto w-auto aspect-1200/971 max-h-82"
          fit="contain"
          src="/pragvue2024.webp"
          :title="$t('year.2024.image')"
          :alt="$t('year.2024.image')"
        />

        <h3 class="text-2xl text-center text-vue-light font-bold mb-2">
          {{ $t('year.2024.speakers') }}
        </h3>

        <ul class="mb-12 mx-auto p-2 max-w-155">
          <Year2024UiSpeakerBox
            v-for="{ name, img, dscr } in speakers" :key="name"
            :name :img :dscr
          />
        </ul>

        <UiBacklink />
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
import { speakers } from '~/data/speakers-2024'

useSeoMeta({
  title: 'PragVue 2024',
  description: 'The first Vue.js conference in Prague, Czechia (24th September 2024)',
  ogType: 'website',
  ogUrl: 'https://pragvue.com/',
  ogTitle: 'PragVue 2024',
  ogDescription: 'The first Vue.js conference in Prague, Czechia (24th September 2024)',
  ogImage: 'https://pragvue.com/pragvue2024.jpg',
  twitterCard: 'summary_large_image',
})
</script>
