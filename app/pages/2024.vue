<template>
  <div>
    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-12 text-center text-vue">
          {{ $t('pages.2024.title') }}
        </UiHeading>

        <i18n-t
          tag="p"
          scope="global"
          keypath="pages.2024.about"
          class="mb-8 tracking-[0.01em] max-w-[128ch] text-center text-balance"
        />

        <UiImage
          class="mb-10 mx-auto w-auto aspect-[1200/971] max-h-[330px]"
          fit="contain"
          src="/pragvue2024.webp"
          :title="$t('pages.2024.image')"
          :alt="$t('pages.2024.image')"
        />

        <h3 class="text-2xl text-center text-vue-light font-bold mb-2">
          {{ $t('pages.2024.speakers') }}
        </h3>

        <ul class="mb-12 mx-auto p-2 max-w-[620px]">
          <UiSpeakerBoxPast
            v-for="{ name, img, dscr } in speakers" :key="name"
            :name :img :dscr
          />
        </ul>

        <div class="flex flex-col gap-4 items-center justify-center">
          <UiButtonIcon icon="💻" href="/" :label="$t('pages.2024.back_to_2025')" />
        </div>
      </LayoutContainerContent>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
import { speakers } from '~/data/speakers-2024'
</script>
