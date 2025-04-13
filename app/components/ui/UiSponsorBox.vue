<template>
  <div class="contents">
    <div
      v-for="(sponsor, index) in sponsors"
      :key="index"
      class="flex items-center justify-center bg-secondary-soft h-16"
      :aria-label="sponsor.title || 'Sponsor'"
    >
      <NuxtLink
        :to="sponsor.to"
        class="w-full h-full flex flex-col justify-center items-center py-4"
      >
        <img
          v-if="sponsor.image"
          :src="`/${sponsor.image}.webp`"
          :alt="sponsor.alt || sponsor.title || 'Sponsor logo'"
          width="100"
          height="33"
          loading="lazy"
        />
      </NuxtLink>
    </div>
    <div
      class="text-sm text-text-muted h-16 bg-secondary-soft flex justify-center items-center"
    >
      <span>&#123;&#123;&nbsp;</span>
      {{ $t('pages.home.your_company_can_be_here') }}
      <span>&nbsp;&#125;&#125;</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { sponsors } = useSponsorList()
</script>
