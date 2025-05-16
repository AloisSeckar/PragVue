<template>
  <LayoutContainer class="pt-2 h-lvh relative isolation overflow-hidden">
    <IconPragueSilhouette class="absolute bottom-0 inset-x-1/2 -z-10 pgv-hero-banner__bg" />

    <div class="flex flex-row gap-4 justify-center items-center mb-2">
      <UiSponsorBox
        v-for="sponsor in topSponsors"
        :key="sponsor.to"
        :to="sponsor.to"
        :image="sponsor.image"
        :title="sponsor.title"
        :alt="sponsor.alt"
        no-background
        size="sm"
      />
    </div>

    <div class="flex flex-row gap-4 justify-center items-center">
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

    <LayoutContainerContent class="flex flex-col items-center justify-start sm:justify-center gap-4 sm:gap-6">
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
        <div class="flex flex-row gap-4">
          <NuxtLink to="https://bsky.app/profile/pragvue.com">
            <img src="/bluesky.png" title="Follow us on Bluesky" alt="PragVue Bluesky" class="p-2 h-10 rounded-md ring-2 ring-vue hover:ring-vue-light">
          </NuxtLink>
          <NuxtLink to="https://x.com/PragVue_conf">
            <img src="/twitter.png" title="Follow us on Twitter/X" alt="PragVue Twitter/X" class="p-2 h-10 rounded-md ring-2 ring-vue hover:ring-vue-light">
          </NuxtLink>
        </div>
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
import { sponsors } from '@/utils/sponsors-2025'

const topSponsors = sponsors.filter(s => s.tier === 1)
const otherSponsors = sponsors.filter(s => s.tier > 1)
</script>

<style scoped>
.pgv-hero-banner__bg {
  transform: translateX(-50%);
  width: clamp(1200px, 100%, 2000px);
}
</style>
