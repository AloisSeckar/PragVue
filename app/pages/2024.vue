<template>
  <div>
    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-12 text-vue">
          {{ $t('pages.2024.title') }}
        </UiHeading>

        <p class="mb-8 text-base max-w-[128ch] text-center text-balance">
          {{ $t('pages.2024.about') }}
        </p>

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
            v-for="{ name, img, dscr } in speakers"
            :key="name"
            :name
            :img
            :dscr
          />
        </ul>

        <div class="flex flex-col gap-4 items-center justify-center">
          <UiButtonIcon
            icon="💻"
            href="/"
            :label="$t('pages.2024.back_to_2025')"
          />
        </div>
      </LayoutContainerContent>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
const speakers = [
  {
    name: 'Daniel Roe',
    img: 'roe_d',
    dscr: 'gave us insight about upcomming Nuxt 4',
  },
  {
    name: 'Estéban Soubiran',
    img: 'soubrain_e',
    dscr: 'demonstrated fullstack application with NuxtHub',
  },
  {
    name: 'Alexander Lichter',
    img: 'lichter_a',
    dscr: 'shared best practices for working with Vue composables',
  },
  {
    name: 'Ramona Schwering',
    img: 'schwering_r',
    dscr: 'had a talk about Automated Tests in the World of Web Security',
  },
  {
    name: 'Thorsten Seyschab',
    img: 'seyschab_t',
    dscr: 'showed us how to move Vue to 3D',
  },
  {
    name: 'Alois Sečkár',
    img: 'seckar_a',
    dscr: 'presented his experience about implementing big Nuxt project',
  },
  {
    name: 'Konstantin Bifert',
    img: 'bifert_k',
    dscr: 'taught us how to ship Vue.js on different platforms',
  },
  {
    name: 'Juan Andrés Núñez',
    img: 'nunez_j',
    dscr: 'leveraged Firebase for Real-Time Vue app updates',
  },
]
</script>
