<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-6 text-vue">
        {{ $t('headings.venue') }}
      </UiHeading>

      <i18n-t
        tag="p"
        scope="global"
        keypath="pages.home.venue_info"
        class="mb-8 tracking-[0.01em] max-w-[1150px] text-left text-balance"
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
            class="mx-auto w-auto max-h-[320px]"
            src="/grandium1.webp" loading="lazy"
            :title="venueImages" :alt="venueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
          <NuxtImg
            class="mx-auto w-auto max-h-[320px]"
            src="/grandium2.webp" loading="lazy"
            :title="venueImages" :alt="venueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
          <NuxtImg
            class="mx-auto w-auto max-h-[320px]"
            fit="contain"
            src="/grandium3.webp" loading="lazy"
            :title="venueImages" :alt="venueImages"
          />
        </NuxtLink>
      </div>

      <i18n-t
        tag="p"
        scope="global"
        keypath="pages.home.venue_offer"
        class="mb-12 tracking-[0.01em] max-w-[1150px] text-left text-ballance"
      >
        <template #offer>
          <strong class="text-vue-light"> {{ $t('pages.home.venue_offer_highlight') }} </strong>
        </template>
        <template #hotel>
          <NuxtLink to="https://www.hotel-grandium.cz/en/" class="text-vue hover:text-vue-light hover:cursor-pointer">
            Hotel Grandium
          </NuxtLink>
        </template>
      </i18n-t>

      <!--
      <div class="flex flex-col gap-4 items-center justify-center">
        <UiButtonIcon icon="🏨" href="mailto:info@pragvue.com" :label="$t('buttons.hotel')" />
      </div>
      -->
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const venueImages = useT('pages.home.venue_images')
</script>
