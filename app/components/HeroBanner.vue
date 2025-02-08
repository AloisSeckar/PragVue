<template>
  <LayoutContainer class="pgv-hero-banner">
    <IconPragueSilhouette class="pgv-hero-banner__bg" />

    <div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <UiSponsorBox
        href="https://www.evidencz.com/" image="eviden"
        title="Eviden Czech Republic" alt="Eviden logo"
      />
      <UiSponsorBox
        href="https://www.exponet.cz/" image="exponet"
        title="Exponet - Your Event Manager" alt="Eviden logo"
      />
    </div>

    <LayoutContainerContent class="flex flex-col items-center justify-center gap-4 sm:gap-6 h-full">
      <TheLogo tag="h1" />

      <p class="text-sm sm:text-lg md:text-2xl text-center mb-6">
        {{ $t('headings.the_czech_vuejs_conference') }}
      </p>

      <p class="text-sm sm:text-lg md:text-2xl text-center font-bold">
        23 September 2025
      </p>
      <p class="text-sm sm:text-lg md:text-2xl text-center">
        <NuxtLink to="https://www.hotel-grandium.cz/" class=" hover:text-yellow-100">
          Grandium Hotel Prague
        </NuxtLink>
        &nbsp;<a href="https://maps.app.goo.gl/vWW31EiriqbdCpTW8" title="Show on map">🗺️</a>
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-4 items-center">
        <UiLinkButton href="#" caption="Buy tickets 💰" />
        <UiLinkButton href="#more" caption="More info 🔍" />
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.pgv-hero-banner {
    position: relative;
    height: 40rem;
    isolation: isolate;
    overflow: hidden;
}

.pgv-hero-banner__bg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(1200px, 100%, 2000px);
    z-index: -1;

}
</style>
