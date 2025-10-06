<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-6 text-vue-light font-xl">
        {{ $t('headings.the_gallery') }}
      </UiHeading>

      <UCarousel
        v-slot="{ item }" arrows loop auto-height
        :items="items" class="w-full mx-auto max-w-[600px]"
      >
        <a :href="item">
          <img
            :src="item" width="640" height="320"
            alt="Photo from PragVue 2025"
            class="rounded-lg"
          >
        </a>
      </UCarousel>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const items = Array.from({ length: 44 }, (_, i) => {
  const number = String(i + 1).padStart(3, '0')
  return `/2025/PragVue2025_${number}.jpg`
})
</script>

<style scoped>
.gallery {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem;
}
</style>
