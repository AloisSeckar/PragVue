<template>
  <LayoutContainer class="h-dvh relative">
    <IconPragueSilhouette
      class="absolute bottom-0 inset-x-1/2 -z-10 pgv-hero-banner__bg"
      aria-hidden="true"
    />

    <section
      class="flex flex-row gap-4 sm:gap-10 justify-center items-center absolute top-0 left-1/2 -translate-x-1/2 p-2 w-full"
      aria-label="Sponsors"
    >
      <div
        v-for="(sponsor, index) in sponsors"
        :key="index"
        class="flex items-center justify-center h-16"
        :aria-label="sponsor.title"
      >
        <NuxtLink
          :to="sponsor.to"
          class="w-full h-full flex flex-col justify-center items-center py-4"
        >
          <img
            v-if="sponsor.image"
            :src="`/${sponsor.image}.webp`"
            :alt="sponsor.alt"
            loading="lazy"
            class="w-20 h-5"
          />
        </NuxtLink>
      </div>
    </section>

    <LayoutContainerContent
      class="h-[calc(100%-var(--layout-vertical-padding)*2)] sm:gap-10"
    >
      <section class="flex flex-col gap-3" aria-label="Event title">
        <TheLogo tag="h1" />
        <p class="text-sm text-center">
          {{ $t('headings.the_czech_vuejs_conference') }}
        </p>
      </section>

      <section
        class="flex flex-col items-center gap-4 sm:flex-row"
        aria-label="Event details"
      >
        <div class="flex flex-col items-center">
          <p class="text-xs sm:text-xl uppercase text-text-muted">
            {{ $t('hero_section.when') }}
          </p>
          <p class="px-8 py-2 text-sm sm:text-xl text-center font-bold">
            {{ $t('2025.conference_date') }}
          </p>
        </div>

        <div class="flex flex-col items-center">
          <p class="text-xs sm:text-xl uppercase text-text-muted">
            {{ $t('hero_section.where') }}
          </p>

          <UiLink
            to="https://www.hotel-grandium.cz/"
            class="sm:text-xl text-center text-primary underline"
            variant="ghost"
            title="Visit Hotel Grandium Prague website"
            aria-label="Visit Hotel Grandium Prague website"
          >
            {{ $t('2025.conference_place') }}
          </UiLink>
        </div>
      </section>

      <nav
        class="flex flex-col gap-4 items-center pt-6 sm:flex-row"
        aria-label="Event actions"
      >
        <UiLink
          to="https://pragvue.konference.cz/"
          aria-label="Buy tickets for PragVue conference"
          class="w-full"
        >
          {{ $t('hero_section.buy_tickets') }}
          <template #suffix>
            <IconNuxtIcon name="ticket" :size="{ base: 'sm' }" />
          </template>
        </UiLink>

        <div class="flex flex-col gap-4 sm:flex-row">
          <UiLink
            to="https://maps.app.goo.gl/vWW31EiriqbdCpTW8"
            variant="secondary"
            title="View location on Google Maps"
            aria-label="View location of the event on Google Maps"
          >
            {{ $t('hero_section.show_on_map') }}

            <template #suffix>
              <IconNuxtIcon
                name="map"
                :size="{
                  base: 'sm',
                }"
              />
            </template>
          </UiLink>
          <UiButton
            variant="secondary"
            title="Add event to calendar"
            aria-label="Add event to calendar"
            @click="generateICalFile"
          >
            {{ $t('hero_section.add_to_calendar') }}
            <template #suffix>
              <IconNuxtIcon name="calendar-plus" :size="{ base: 'sm' }" />
            </template>
          </UiButton>
        </div>
      </nav>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const { sponsors } = useSponsorList()
const { generateICalFile } = useICalGenerator()
</script>

<style scoped>
.pgv-hero-banner__bg {
  transform: translateX(-50%);
  width: clamp(1200px, 100%, 2000px);
}
</style>
