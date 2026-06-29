<template>
  <LayoutContainer>
    <Year2024UiHeading class="mb-6 text-vue">
      {{ $t('headings.venue') }}
    </Year2024UiHeading>

    <i18n-t
      tag="p"
      scope="global"
      keypath="year.2025.venue_info"
      class="mb-8 tracking-[0.01em] max-w-285 text-left"
    >
      <template #hotel>
        <NuxtLink to="https://www.hotel-grandium.cz/en/" class="text-vue hover:text-vue-light hover:cursor-pointer">
          Hotel Grandium
        </NuxtLink><span style="margin-left: -5px">,</span>
      </template>
    </i18n-t>

    <div class="flex flex-col lg:flex-row gap-4 mb-10 px-2">
      <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
        <NuxtImg
          class="mx-auto w-auto max-h-80"
          src="/grandium1.webp" loading="lazy"
          :title="venueImages" :alt="venueImages"
        />
      </NuxtLink>
      <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
        <NuxtImg
          class="mx-auto w-auto max-h-80"
          src="/grandium2.webp" loading="lazy"
          :title="venueImages" :alt="venueImages"
        />
      </NuxtLink>
      <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
        <NuxtImg
          class="mx-auto w-auto max-h-80"
          src="/grandium3.webp" loading="lazy"
          :title="venueImages" :alt="venueImages"
        />
      </NuxtLink>
    </div>

    <i18n-t
      tag="p"
      scope="global"
      keypath="year.2025.venue_offer"
      class="mb-12 tracking-[0.01em] max-w-285 text-left text-ballance"
    >
      <template #hotel>
        <NuxtLink to="https://www.hotel-grandium.cz/en/" class="text-vue hover:text-vue-light hover:cursor-pointer">
          Hotel Grandium
        </NuxtLink>
      </template>
    </i18n-t>
  </LayoutContainer>
</template>

<script setup lang="ts">
const venueImages = useT('year.2025.venue_images')
</script>
