<template>
  <LayoutContainer>
    <div class="flex flex-col items-center">
      <UiHeading class="mb-6 text-vue-light">
        {{ $t('headings.the_speakers') }}
      </UiHeading>

      <div class="text-center tracking-[0.01em] max-w-[64ch] text-xl mb-4">
        Our lineup for 2026 is ready and you'll find it out soon!
      </div>

      <div class="mx-auto mt-4 flex flex-row flex-wrap justify-center gap-4">
        <NuxtImg
          v-for="(speaker, index) in speakers" :key="index"
          :src="speaker.bg" :alt="speaker.name" :title="speaker.name"
          class="w-40 h-40 rounded-lg shadow-lg"
        />
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
import { speakers } from '~/data/speakers-2026'
</script>
