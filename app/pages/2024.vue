<template>
  <div>
    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-12">
          {{ $t('pages.2024.title') }}
        </UiHeading>

        <i18n-t
          tag="p"
          scope="global"
          keypath="pages.2024.about"
          class="text-base max-w-[128ch] text-center text-balance"
        />

        <UiImage
          class="w-auto aspect-[1200/971] max-h-[330px] mx-auto mt-12"
          fit="contain"
          src="/pragvue2024.webp"
          :title="$t('pages.2024.image')"
          :alt="$t('pages.2024.image')"
        />

        <h3 class="text-xl text-center font-bold mt-12 mb-6">
          {{ $t('pages.2024.speakers') }}
        </h3>

        <ul class="mx-auto p-2 max-w-[620px]">
          <li class="mb-2">
            <strong>Daniel Roe</strong> gave us insight about upcomming Nuxt 4
          </li>
          <li class="mb-2">
            <strong>Estéban Soubiran</strong> demonstrated fullstack application with NuxtHub
          </li>
          <li class="mb-2">
            <strong>Alexander Lichter</strong> shared best practices for working with Vue composables
          </li>
          <li class="mb-2">
            <strong>Ramona Schwering</strong> had a talk about Automated Tests in the World of Web Security
          </li>
          <li class="mb-2">
            <strong>Thorsten Seyschab</strong> showed us how to move Vue to 3D
          </li>
          <li class="mb-2">
            <strong>Alois Sečkár</strong> presented his experience about implementing big Nuxt project
          </li>
          <li class="mb-2">
            <strong>Konstantin Bifert</strong> taught us how to ship Vue.js on different platforms
          </li>
          <li class="mb-2">
            <strong>Juan Andrés Núñez</strong> leveraged Firebase for Real-Time Vue app updates
          </li>
        </ul>

        <div class="mt-6 flex flex-col gap-4 items-center justify-center">
          <UiButtonIcon icon="💻" href="/" :label="$t('pages.2024.back_to_2025')" />
        </div>
      </LayoutContainerContent>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">

</script>
