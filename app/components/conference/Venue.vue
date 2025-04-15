<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-6 text-vue-light">
        {{ $t('headings.venue') }}
      </UiHeading>

      <i18n-t
        tag="p"
        scope="global"
        keypath="pages.home.venue_info"
        class="mb-12 text-base max-w-[1150px] text-left text-balance"
      >
        <template #hotel>
          <NuxtLink to="https://www.hotel-grandium.cz/en/" class="text-vue hover:text-vue-light hover:cursor-pointer">
            Hotel Grandium
          </NuxtLink><span style="margin-left: -5px">,</span>
        </template>
      </i18n-t>

      <div class="flex flex-row gap-2 sm:gap-6">
        <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
          <NuxtImg
            class="mb-10 mx-auto w-auto max-h-[200px]"
            src="https://www.hotel-grandium.cz/files-sbbasic/ba_grandiumprague_cz/mars-jupiter-saturn-_banquet.jpg"
            :title="venueImages"
            :alt="venueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
          <NuxtImg
            class="mb-10 mx-auto w-auto max-h-[200px]"
            src="https://www.hotel-grandium.cz/files-sbbasic/ba_grandiumprague_cz/jupiter_banquet.jpg"
            :title="venueImages"
            :alt="venueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
          <NuxtImg
            class="mb-10 mx-auto w-auto max-h-[200px]"
            fit="contain"
            src="https://www.hotel-grandium.cz/files-sbbasic/ba_grandiumprague_cz/gum_mercury_i._u-shape__2_.jpg"
            :title="venueImages"
            :alt="venueImages"
          />
        </NuxtLink>
      </div>

      <i18n-t
        tag="p"
        scope="global"
        keypath="pages.home.venue_offer"
        class="mb-12 text-base max-w-[1150px] text-left text-ballance"
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

      <div class="flex flex-col gap-4 items-center justify-center">
        <UiButtonIcon icon="🏨" href="mailto:alois.seckar@eviden.com" :label="$t('buttons.hotel')" />
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const venueImages = useT('pages.home.venue_images')
</script>
<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-6 text-vue-light">
        {{ $t('headings.venue') }}
      </UiHeading>

      <i18n-t
        tag="p"
        scope="global"
        keypath="pages.home.venue_info"
        class="mb-12 text-base max-w-[1150px] text-left text-balance"
      >
        <template #hotel>
          <NuxtLink to="https://www.hotel-grandium.cz/en/" class="text-vue hover:text-vue-light hover:cursor-pointer">
            Hotel Grandium
          </NuxtLink><span style="margin-left: -5px">,</span>
        </template>
      </i18n-t>

      <div class="flex flex-row gap-2 sm:gap-6">
        <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
          <NuxtImg
            class="mb-10 mx-auto w-auto max-h-[200px]"
            src="/grandium1.webp" loading="lazy"
            :title="venueImages" :alt="venueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
          <NuxtImg
            class="mb-10 mx-auto w-auto max-h-[200px]"
            src="/grandium2.webp" loading="lazy"
            :title="venueImages" :alt="venueImages"
          />
        </NuxtLink>
        <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
          <NuxtImg
            class="mb-10 mx-auto w-auto max-h-[200px]"
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
        class="mb-12 text-base max-w-[1150px] text-left text-ballance"
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

      <div class="flex flex-col gap-4 items-center justify-center">
        <UiButtonIcon icon="🏨" href="mailto:alois.seckar@eviden.com" :label="$t('buttons.hotel')" />
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const venueImages = useT('pages.home.venue_images')
</script>
