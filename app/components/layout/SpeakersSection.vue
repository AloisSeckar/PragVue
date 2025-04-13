<template>
  <a id="speakers" />
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-6 text-primary-light">
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
          <UiButtonIcon icon="🎤" href="mailto:alois.seckar@eviden.com" :label="$t('buttons.speaker')" />
        </div>
        -->
    </LayoutContainerContent>
  </layoutcontainer>

  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-12 text-primary">
        {{ $t('headings.look_back_on_2024') }}
      </UiHeading>

      <i18n-t
        tag="p"
        scope="global"
        keypath="pages.home.look_back_on_2024"
        class="mb-12 text-base max-w-[128ch] text-center text-balance"
      />

      <NuxtLink to="/2024">
        <UiImage
          class="w-auto aspect-[1200/971] max-h-[330px] mx-auto"
          fit="contain"
          src="/pragvue2024.webp"
          :title="$t('pages.home.link_2024')"
          :alt="$t('accessibility.photo_of_the_speakers_from_2024')"
        />
      </NuxtLink>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const { speakers } = useSpeakerList()
</script>
