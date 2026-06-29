<template>
  <section class="pt-2 h-lvh relative isolation overflow-hidden flex flex-col items-center justify-center">
    <IconPragueSilhouette class="absolute bottom-0 inset-x-1/2 -z-10 pgv-hero-banner__bg" />

    <div class="hidden md:flex flex-row gap-4 justify-center items-center mb-2">
      <UiSponsorBox
        v-for="sponsor in topSponsors"
        :key="sponsor.to"
        :to="sponsor.to"
        :image="sponsor.image"
        :title="sponsor.title"
        :alt="sponsor.alt"
        no-background
        size="md"
      />
    </div>
    <UiSwiper class="md:hidden!" :slides="topSponsors" :navigation="false">
      <template #slide="{ slide }">
        <UiSponsorBox
          :key="slide.to"
          :to="slide.to"
          :image="slide.image"
          :title="slide.title"
          :alt="slide.alt"
          no-background
          size="md"
        />
      </template>
    </UiSwiper>

    <div class="hidden md:flex flex-row gap-4 justify-center items-center">
      <UiSponsorBox
        v-for="sponsor in otherSponsors"
        :key="sponsor.to"
        :to="sponsor.to"
        :image="sponsor.image"
        :title="sponsor.title"
        :alt="sponsor.alt"
        no-background
        size="sm"
      />
    </div>
    <UiSwiper class="md:hidden!" :slides="otherSponsors" :navigation="false">
      <template #slide="{ slide }">
        <UiSponsorBox
          :key="slide.to"
          :to="slide.to"
          :image="slide.image"
          :title="slide.title"
          :alt="slide.alt"
          no-background
          size="sm"
        />
      </template>
    </UiSwiper>

    <UiBacklink class="mt-6 -mb-10" />

    <LayoutContainer :section="false" class="flex flex-col items-center justify-start sm:justify-center gap-4 sm:gap-6">
      <h1 class="font-default font-bold pt-12 px-4 sm:pt-0 whitespace-nowrap text-woodsmoke-600 before:content-['<_'] after:content-['_/>'] pgv-logo">
        <UiPragVue :year="2025" />
      </h1>

      <p class="mb-6 text-xl md:text-2xl text-center">
        {{ $t('headings.the_czech_vuejs_conference') }}
      </p>

      <p class="mb-1 text-xl md:text-3xl text-center font-bold">
        {{ $t('year.2025.when') }}
      </p>
      <p class="mb-4 text-xl md:text-2xl text-center">
        <NuxtLink to="https://www.hotel-grandium.cz/" class=" hover:text-vue-light">
          {{ $t('year.2025.where') }}
        </NuxtLink>
        &nbsp;<a href="https://maps.app.goo.gl/vWW31EiriqbdCpTW8" :title="$t('year.2025.map')">🗺️</a>
      </p>

      <UiMoreInfo />
    </LayoutContainer>
  </section>
</template>

<script setup lang="ts">
import { sponsors } from '~/data/sponsors-2025'

const topSponsors = sponsors.filter(s => s.tier === 1)
const otherSponsors = sponsors.filter(s => s.tier > 1)
</script>

<style scoped>
.pgv-hero-banner__bg {
  transform: translateX(-50%);
  width: clamp(1200px, 100%, 2000px);
}

.pgv-logo {
    font-size: clamp(2rem, 10vw, 6rem);
}
</style>
