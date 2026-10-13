<template>
  <a id="gallery" />
  <section class="gallery" :aria-label="$t('gallery.aria')">
    <UiHeading class="mt-20 mb-6 text-vue text-center font-xl mx-auto max-w-210">
      {{ $t('headings.the_gallery_2026') }}
    </UiHeading>

    <UCarousel
      v-slot="{ item }"
      :items="items"
      arrows loop auto-height
      :prev="{ size: 'xl', variant: 'outline', class: 'custom-prev-btn hover:cursor-pointer' }"
      :next="{ size: 'xl', variant: 'outline', class: 'custom-next-btn hover:cursor-pointer' }"
      class="w-full mx-auto max-w-150 custom-carousel"
    >
      <a :href="item" target="_blank" rel="noopener">
        <img
          :src="item" width="640" height="320"
          alt="Photo from PragVue 2026"
          loading="lazy"
          class="rounded-lg"
        >
      </a>
    </UCarousel>

    <div class="mt-4 text-center">
      {{ $t('gallery.photos_by') }} <span class="text-vue-light hover:text-vue hover:underline">Atos</span>
    </div>
  </section>
</template>

<script setup lang="ts">
// dumb but reliable - the list won't change
const photoNumbers = [
  4769, 4772, 4773, 4774, 4778, 4781, 4782, 4783, 4784, 4786, 4787, 4788, 4790, 4792, 4797, 4798,
  4801, 4802, 4808, 4809, 4810, 4811, 4814, 4816, 4817, 4818, 4819, 4821, 4825, 4827, 4830, 4831,
  4838, 4840, 4844, 4845, 4848, 4849, 4854, 4856, 4861, 4864, 4867, 4869, 4875, 4876, 4878, 4880,
  4881, 4882, 4889, 4893, 4896, 4897, 4902, 4903, 4906, 4907, 4910, 4914, 4916, 4921, 4923, 4924,
  4934, 4935, 4940, 4948, 4949, 4963, 4964, 4965, 4966, 4973, 4976, 4979, 4990, 4995, 4996, 4997,
  5006, 5007, 5013, 5027, 5035, 5037, 5038, 5044, 5069, 5079, 5081, 5085, 5088, 5092, 5095, 5101,
  5106, 5119, 5123, 5127, 5130, 5153, 5159, 5161, 5162, 5164, 5174,
]
const items = photoNumbers.map(n => `/2026/DSCF${n}.jpg`)
</script>

<style scoped>
.gallery {
    max-width: 830px;
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

/* Responsive positioning for mobile - move buttons over the image */
@media (max-width: 767px) {
  .custom-carousel :deep(.custom-prev-btn) {
    left: 10px !important;
    background-color: rgba(255, 255, 255, 0.8) !important;
  }

  .custom-carousel :deep(.custom-next-btn) {
    right: 10px !important;
    background-color: rgba(255, 255, 255, 0.8) !important;
  }

  .custom-carousel :deep(.custom-prev-btn):hover,
  .custom-carousel :deep(.custom-next-btn):hover {
    background-color: rgba(255, 255, 255, 0.95) !important;
  }
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
