<template>
  <LayoutContainer>
    <div class="flex flex-col items-start">
      <UiHeading class="mb-6 text-vue-light">
        {{ $t('headings.prague') }}
      </UiHeading>

      <i18n-t
        tag="p"
        scope="global"
        keypath="pages.home.prague_info"
        class="mb-8 tracking-[0.01em] max-w-285 text-left text-balance"
      />

      <div class="flex flex-col md:flex-row gap-4 mb-10 px-2">
        <NuxtLink to="https://prague.eu/en/" class="cursor-pointer">
          <NuxtImg
            class="mx-auto max-h-80 w-full object-cover"
            src="/prague1.webp" loading="lazy"
            :title="pragueImages" :alt="pragueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://prague.eu/en/" class="cursor-pointer">
          <NuxtImg
            class="mx-auto max-h-80 w-full object-cover"
            src="/prague2.webp" loading="lazy"
            :title="pragueImages" :alt="pragueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://prague.eu/en/" class="cursor-pointer">
          <NuxtImg
            class="mx-auto max-h-80 w-full object-cover"
            src="/prague3.webp" loading="lazy"
            :title="pragueImages" :alt="pragueImages"
          />
        </NuxtLink>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
const pragueImages = useT('pages.home.prague_images')
</script>
