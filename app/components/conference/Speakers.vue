<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-6 text-vue-light">
        {{ $t('headings.the_speakers') }}
      </UiHeading>

      <UiSwiper class="py-12" :slides="speakers">
        <template #slide="{ slide }">
          <UiSpeakerBox
            :name="slide.name"
            :country="slide.country"
            :github="slide.github"
            :bio="slide.bio"
            :bg="slide.bg"
          />
        </template>
      </UiSwiper>

      <a id="schedule" />
      <LazyConferenceSchedule hydrate-on-visible />

      <p class="mt-2 mb-6 mx-auto tracking-[0.01em] max-w-[72ch] text-left sm:text-justify text-balance">
        {{ $t('pages.home.speakers_info') }}
      </p>

      <!-- SPEAKER LIMIT REACHED 🤯
        <h3 class="mb-4 text-2xl text-center font-bold ">
          {{ $t('pages.home.speakers_you') }} 👀
        </h3>
        <p class="mb-8 tracking-[0.01em] max-w-[72ch] text-center text-balance mx-auto">
          {{ $t('pages.home.speakers_you_info') }}
        </p>
        <div class="flex flex-col gap-4 items-center justify-center">
          <UiButtonIcon icon="🎤" href="mailto:info@pragvue.com" :label="$t('buttons.speaker')" />
        </div>
        -->
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
import { speakers } from '~/data/speakers-2025'
</script>
