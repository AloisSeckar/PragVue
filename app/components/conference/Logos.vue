<template>
  <div class="sponsors-header fixed top-0 left-0 z-50 w-full bg-woodsmoke-900/50 backdrop-blur-sm border-b border-white/10">
    <UiSwiper :slides="localSponsors" :navigation="false" loop>
      <template #slide="{ slide }">
        <UiSponsorBox
          :key="slide.to"
          :to="slide.to"
          :image="slide.image"
          :title="slide.title"
          :alt="slide.alt"
          no-background
          :size="slide.tier === 1 ? 'sm' : 'xs'"
        />
      </template>
    </UiSwiper>
  </div>
</template>

<script setup lang="ts">
import { sponsors } from '~/data/sponsors-2026'

const localSponsors = [{
  tier: 1,
  to: 'https://pragvue.com/2026',
  image: 'pragvue-2026',
  title: 'PragVue',
  alt: 'PragVue logo',
}, ...sponsors]
</script>

<style scoped>
.sponsors-header :deep(.swiper-wrapper) {
  align-items: center;
}
</style>
