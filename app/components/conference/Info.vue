<template>
  <LayoutContainer>
    <a id="info" />
    <div class="flex flex-col items-center mt-12">
      <UiHeading class="mb-6 text-vue-light">
        {{ $t('2026.info') }}
      </UiHeading>

      <div class="w-full max-w-6xl border-t border-woodsmoke-800 p-4 sm:p-6 lg:p-8">
        <div class="grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-stretch">
          <div class="overflow-hidden rounded-[1.5rem] border border-woodsmoke-800 bg-woodsmoke-900 min-h-80 lg:min-h-full">
            <div class="relative h-full min-h-80">
              <Transition name="info-image-fade">
                <UiImage
                  :key="currentImage"
                  :src="currentImage"
                  :title="$t('info.image_title')"
                  :alt="$t('info.image_alt')"
                  class="h-full min-h-80 w-full"
                />
              </Transition>
            </div>
          </div>

          <div class="flex flex-col justify-center">
            <div class="mb-6">
              <p class="mb-2 text-lg font-semibold uppercase tracking-[0.28em] text-vue/80">
                {{ $t('info.eyebrow') }}
              </p>
              <p class="max-w-[64ch] text-left md:text-justify lg:text-left text-lg leading-8 text-woodsmoke-100 sm:text-xl">
                {{ $t('2026.what') }}
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-3">
              <div class="rounded-[1.5rem] border border-vue/30 bg-vue/8 p-5 text-left">
                <p class="mb-2 text-lg font-semibold uppercase tracking-[0.24em] text-vue/80">
                  {{ $t('info.date_label') }}
                </p>
                <p class="text-2xl font-black leading-tight text-vue">
                  {{ $t('2026.date') }}
                </p>
                <p class="mt-2 text-sm text-woodsmoke-200">
                  {{ $t('info.time') }}
                </p>
              </div>

              <div class="rounded-[1.5rem] border border-vue/30 bg-white/3 p-5 text-left">
                <p class="mb-2 text-lg font-semibold uppercase tracking-[0.24em] text-vue/80">
                  {{ $t('info.place_label') }}
                </p>
                <a href="https://arthurspub.cz/" target="_blank" rel="noopener noreferrer" class="block text-2xl font-black leading-tight text-white underline decoration-vue/60 underline-offset-4 hover:text-vue">
                  {{ $t('info.venue_name') }}
                </a>
                <a href="https://maps.app.goo.gl/fcDwXBv6fFXNoEQQ6" :title="$t('2026.map')" class="mt-2 inline-flex items-center gap-2 text-sm text-woodsmoke-200 hover:text-white">
                  <span aria-hidden="true">🗺️</span>
                  <span>{{ $t('info.location') }}</span>
                </a>
              </div>

              <div class="rounded-[1.5rem] border border-vue/30 bg-vue/8 p-5 text-left">
                <p class="mb-2 text-lg font-semibold uppercase tracking-[0.24em] text-vue/80">
                  {{ $t('info.price_label') }}
                </p>
                <p class="text-5xl font-black leading-none text-vue-light">
                  {{ $t('tickets.price2026') }}
                </p>
                <p class="mt-2 text-sm text-woodsmoke-200">
                  {{ $t('info.price_note') }}
                </p>
              </div>
            </div>

            <div class="mt-8 flex justify-center">
              <UiButton
                href="https://goout.net/en/pragvue-2026/szrdely/"
                class="justify-center rounded-xl border-vue-light bg-vue-light w-full max-w-136 px-8 py-4 text-xl text-black hover:border-vue hover:bg-vue! hover:text-vue-light"
              >
                {{ $t('info.buy_tickets') }}
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
const images = [
  '/2025/PragVue2025_006.jpg',
  '/2025/PragVue2025_024.jpg',
  '/2025/PragVue2025_035.jpg',
  '/2025/PragVue2025_038.jpg',
]

const currentImageIndex = ref(0)

const currentImage = computed<string>(() => images[currentImageIndex.value] ?? '/2025/PragVue2025_006.jpg')

let imageRotationInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  imageRotationInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  }, 6000)
})

onBeforeUnmount(() => {
  if (imageRotationInterval) {
    clearInterval(imageRotationInterval)
  }
})
</script>

<style scoped>
.info-image-fade-enter-active {
  transition: opacity 2s ease;
}

.info-image-fade-leave-active {
  transition: opacity 4s ease;
}

.info-image-fade-enter-active,
.info-image-fade-leave-active {
  inset: 0;
  position: absolute;
}

.info-image-fade-enter-from,
.info-image-fade-leave-to {
  opacity: 0;
}
</style>
