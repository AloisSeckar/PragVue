<template>
  <LayoutContainer>
    <Year2024UiHeading class="mb-6 text-vue-light">
      {{ $t('year.2025.speakers_title') }}
    </Year2024UiHeading>

    <UiSwiper class="py-12" :slides="speakers">
      <template #slide="{ slide }">
        <UiSpeakerBox
          :name="slide.name"
          :country="slide.country!"
          :github="slide.github!"
          :bio="slide.bio!"
          :bg="slide.bg"
        />
      </template>
    </UiSwiper>

    <a id="schedule" />
    <LazyYear2025Schedule hydrate-on-visible />

    <p class="mt-2 mb-6 mx-auto tracking-[0.01em] max-w-[72ch] text-left sm:text-justify text-balance">
      {{ $t('year.2025.speakers_info') }}
    </p>
  </LayoutContainer>
</template>

<script setup lang="ts">
import { speakers } from '~/data/speakers-2025'
</script>
