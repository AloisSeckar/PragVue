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
          />
        </template>
      </UiSwiper>

      <p class="mb-12 text base max-w-[72ch] text-center text-balance mx-auto text-xl italic text-woodsmoke-400 pgv-html-comment">
        {{ $t('pages.home.info_schedule') }}
      </p>

      <p class="mb-12 text base max-w-[72ch] text-center text-balance mx-auto text-xl italic text-woodsmoke-400 pgv-html-comment">
        {{ $t('pages.home.info_about_schedule_coming_soon') }}
      </p>

      <p class="mb-6 mx-auto text-base max-w-[72ch] text-center text-balance">
        {{ $t('pages.home.speakers_info') }}
      </p>

      <!-- SPEAKER LIMIT REACHED 🤯
        <h3 class="mb-4 text-2xl text-center font-bold ">
          {{ $t('pages.home.speakers_you') }} 👀
        </h3>
        <p class="mb-8 text-base max-w-[72ch] text-center text-balance mx-auto">
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
// technically not necessary (auto-import), but for better clarity
import { speakers } from '@/utils/speakers-2025'
</script>
