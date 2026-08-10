<template>
  <div class="sponsors-header fixed top-0 left-0 z-50 w-full bg-woodsmoke-900/50 backdrop-blur-sm border-b border-white/10 flex items-center">
    <div class="hidden md:flex shrink-0 px-4">
      <UiSponsorBox
        to="https://pragvue.com/2026"
        image="pragvue-2026"
        title="PragVue"
        alt="PragVue logo"
        no-background
        size="sm"
      />
    </div>
    <div class="py-2 md:py-0 flex-1 min-w-0">
      <UiSwiper :slides="sponsors" :navigation="false" loop aria-hidden="true">
        <template #slide="{ slide }">
          <UiSponsorBox
            :key="slide.to"
            :to="slide.to"
            :image="slide.image"
            :title="slide.title"
            :alt="slide.alt"
            no-background
            size="xs"
            tabindex="-1"
          />
        </template>
      </UiSwiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sponsors } from '~/data/sponsors-2026'
</script>

<style scoped>
.sponsors-header :deep(.swiper-wrapper) {
  align-items: center;
}
</style>
