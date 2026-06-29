<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-6 text-vue">
        {{ $t('headings.venue') }}
      </UiHeading>

      <i18n-t
        tag="p"
        scope="global"
        keypath="venue.venue_info"
        class="mb-8 tracking-[0.01em] max-w-285 text-left text-balance"
      >
        <template #venue>
          <NuxtLink to="https://arthurspub.cz/en/" class="text-vue hover:text-vue-light font-bold hover:cursor-pointer">
            Arthur's Pub
          </NuxtLink><span style="margin-left: -5px">,</span>
        </template>
      </i18n-t>

      <div class="flex flex-col lg:flex-row gap-4 mb-10 px-2">
        <NuxtLink to="https://arthurspub.cz/en/corporate-events" class="cursor-pointer">
          <NuxtImg
            class="mx-auto w-auto max-h-80"
            src="/arthurs-pub-1.webp" loading="lazy"
            :title="venueImages" :alt="venueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://arthurspub.cz/en/corporate-events" class="cursor-pointer">
          <NuxtImg
            class="mx-auto w-auto max-h-80"
            src="/arthurs-pub-2.webp" loading="lazy"
            :title="venueImages" :alt="venueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://arthurspub.cz/en/corporate-events" class="cursor-pointer">
          <NuxtImg
            class="mx-auto w-auto max-h-80"
            src="/arthurs-pub-3.webp" loading="lazy"
            :title="venueImages" :alt="venueImages"
          />
        </NuxtLink>
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const venueImages = useT('venue.venue_images')
</script>
