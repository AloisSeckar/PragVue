<template>
  <div class="hidden md:flex flex-row gap-4 justify-center items-center mb-8">
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
</template>

<script setup lang="ts">
import { sponsors } from '~/data/sponsors-2026'

const topSponsors = sponsors.filter(s => s.tier === 1)
const otherSponsors = sponsors.filter(s => s.tier > 1)
</script>
