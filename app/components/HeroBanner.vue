<template>
  <LayoutContainer class="pt-4 h-lvh relative isolation overflow-hidden">
    <IconPragueSilhouette class="absolute bottom-0 inset-x-1/2 -z-10 pgv-hero-banner__bg" />

    <div class="flex flex-row gap-4 justify-center items-center">
      <UiSponsorBox
        to="https://atos.net/cs/ceska-republika"
        image="atos"
        title="Atos Czech Republic"
        alt="Atos logo"
        no-background
        size="sm"
      />
      <UiSponsorBox
        to="https://www.evidencz.com/"
        image="eviden"
        title="Eviden Czech Republic"
        alt="Eviden logo"
        no-background
        size="sm"
      />
      <UiSponsorBox
        to="https://www.exponet.cz/"
        image="exponet"
        title="Exponet - Your Event Manager"
        alt="Exponet logo"
        no-background
        size="sm"
      />
    </div>

    <LayoutContainerContent class="flex flex-col items-center justify-start sm:justify-center gap-4 sm:gap-6 h-full">
      <TheLogo tag="h1" />

      <p class="mb-6 text-sm sm:text-lg md:text-2xl text-center">
        {{ $t('headings.the_czech_vuejs_conference') }}
      </p>

      <p class="mb-1 text-sm sm:text-lg md:text-3xl text-center font-bold">
        {{ $t('2025.when') }}
      </p>
      <p class="mb-4 text-sm sm:text-lg md:text-xl text-center">
        <NuxtLink to="https://www.hotel-grandium.cz/" class=" hover:text-vue-light">
          {{ $t('2025.where') }}
        </NuxtLink>
        &nbsp;<a href="https://maps.app.goo.gl/vWW31EiriqbdCpTW8" :title="$t('2025.map')">🗺️</a>
      </p>

      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <UiButtonIcon icon="🎫" href="https://pragvue.konference.cz/" :label="$t('buttons.tickets_1')" />
        <UiButtonIcon icon="🔍" href="#info" :label="$t('buttons.more')" variant="secondary" />
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.pgv-hero-banner__bg {
  transform: translateX(-50%);
  width: clamp(1200px, 100%, 2000px);
}
</style>
