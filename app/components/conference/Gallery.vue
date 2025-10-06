<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-6 text-vue-light font-xl">
        {{ $t('headings.the_gallery') }}
      </UiHeading>

      <UCarousel
        v-slot="{ item }"
        :items="items"
        arrows loop auto-height
        :prev="{ size: 'xl', variant: 'outline', class: 'custom-prev-btn hover:cursor-pointer' }"
        :next="{ size: 'xl', variant: 'outline', class: 'custom-next-btn hover:cursor-pointer' }"
        class="w-full mx-auto max-w-[600px] custom-carousel"
      >
        <a :href="item" target="_blank" rel="noopener">
          <img
            :src="item" width="640" height="320"
            alt="Photo from PragVue 2025"
            class="rounded-lg"
          >
        </a>
      </UCarousel>

      <div class="mt-4 text-center">
        Photos by <a href="https://www.linkedin.com/in/cerny-matej/" class="text-vue-light hover:text-vue hover:underline">Matej Černý</a>
      </div>
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

/* Custom carousel arrow buttons */
.custom-carousel :deep(.custom-prev-btn),
.custom-carousel :deep(.custom-next-btn) {
  position: absolute !important;
  top: 55% !important;
  transform: translateY(-50%) !important;
  background-color: rgba(255, 255, 255, 0.9) !important;
  border: 2px solid #333 !important;
  border-radius: 50% !important;
  width: 48px !important;
  height: 48px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 0 !important; /* Hide any text */
  z-index: 10 !important;
}

.custom-carousel :deep(.custom-prev-btn) {
  left: -60px !important;
}

.custom-carousel :deep(.custom-next-btn) {
  right: -60px !important;
}

.custom-carousel :deep(.custom-prev-btn):hover {
  background-color: rgba(255, 255, 255, 1) !important;
  transform: translateY(-50%) scale(1.1) !important;
}

.custom-carousel :deep(.custom-next-btn):hover {
  background-color: rgba(255, 255, 255, 1) !important;
  transform: translateY(-50%) scale(1.1) !important;
}

/* Create arrow using CSS pseudo-elements */
.custom-carousel :deep(.custom-prev-btn::before) {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 12px solid #333;
  left: 14px;
}

.custom-carousel :deep(.custom-next-btn::before) {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 12px solid #333;
  right: 14px;
}

/* Hide any existing icons/content */
.custom-carousel :deep(.custom-prev-btn) > *:not(::before),
.custom-carousel :deep(.custom-next-btn) > *:not(::before) {
  display: none !important;
}
</style>
