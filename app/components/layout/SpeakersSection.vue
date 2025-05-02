<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading>
        {{ $t('headings.the_speakers') }}
      </UiHeading>

      <UiSwiper :slides="speakers">
        <template #slide="{ slide }">
          <UiSpeakerBox :slide="slide" />
        </template>
      </UiSwiper>

      <p
        class="pb-12 text-center text-balance mx-auto text-xl italic text-text-muted sm:text-lg"
      >
        {{ $t('pages.home.info_about_schedule_coming_soon') }}
      </p>

      <p class="text-balance sm:text-lg">
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
          <UiButtonIcon icon="🎤" href="mailto:alois.seckar@eviden.com" :label="$t('buttons.speaker')" />
        </div>
        -->
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const { speakers } = useSpeakerList()
</script>
