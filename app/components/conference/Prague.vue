<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-6 text-vue">
        {{ $t('headings.prague') }}
      </UiHeading>

      <i18n-t
        tag="p"
        scope="global"
        keypath="pages.home.prague_info"
        class="mb-8 tracking-[0.01em] max-w-[1150px] text-left text-balance"
      />

      <div class="flex flex-col lg:flex-row gap-4 mb-10 px-2">
        <NuxtLink to="https://prague.eu/en/" class="cursor-pointer">
          <NuxtImg
            class="mx-auto w-auto max-h-[320px]"
            src="/prague1.webp" loading="lazy"
            :title="pragueImages" :alt="pragueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://prague.eu/en/" class="cursor-pointer">
          <NuxtImg
            class="mx-auto w-auto max-h-[320px]"
            src="/prague2.webp" loading="lazy"
            :title="pragueImages" :alt="pragueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://prague.eu/en/" class="cursor-pointer">
          <NuxtImg
            class="mx-auto w-auto max-h-[320px]"
            fit="contain"
            src="/prague3.webp" loading="lazy"
            :title="pragueImages" :alt="pragueImages"
          />
        </NuxtLink>
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const pragueImages = useT('pages.home.prague_images')
</script>
