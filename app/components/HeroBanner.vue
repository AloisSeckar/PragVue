<template>
  <LayoutContainer class="pgv-hero-banner">
    <IconPragueSilhouette class="pgv-hero-banner__bg" />

    <div class="mt-6 flex flex-row gap-4 justify-center items-center">
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
        {{ $t('2025.when') }}
      </p>
      <p class="text-sm sm:text-lg md:text-2xl text-center">
        <NuxtLink to="https://www.hotel-grandium.cz/" class=" hover:text-vue-light">
          {{ $t('2025.where') }}
        </NuxtLink>
        &nbsp;<a href="https://maps.app.goo.gl/vWW31EiriqbdCpTW8" :title="$t('2025.map')">🗺️</a>
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-4 items-center">
        <UiLinkButton href="https://pragvue.konference.cz/" :caption="$t('buttons.tickets_1')" />
        <UiLinkButton href="#more" :caption="$t('buttons.more')" />
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

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
