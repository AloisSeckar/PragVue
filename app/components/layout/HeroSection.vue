<template>
  <LayoutContainer class="h-dvh relative">
    <IconPragueSilhouette
      class="absolute bottom-0 inset-x-1/2 -z-10 pgv-hero-banner__bg"
      aria-hidden="true"
    />

    <section
      class="flex flex-row gap-4 justify-center items-center absolute top-0 left-1/2 -translate-x-1/2 p-2 w-full"
      aria-label="Sponsors"
    >
      <div
        v-for="(sponsor, index) in sponsors"
        :key="index"
        class="flex items-center justify-center h-16"
        :aria-label="sponsor.title"
      >
        <NuxtLink :to="sponsor.to" class="w-full h-full flex flex-col justify-center items-center py-4">

          <img
            v-if="sponsor.image"
            :src="`/${sponsor.image}.webp`"
            :alt="sponsor.alt"
            :width="80"
            :height="20"
            loading="lazy"
          >
        </NuxtLink>
      </div>
    </section>

    <LayoutContainerContent class="h-[calc(100%-var(--layout-vertical-padding)*2)]">
      <section class="flex flex-col gap-3" aria-label="Event title">
        <TheLogo tag="h1" />
        <p class="text-sm sm:text-lg md:text-2xl text-center">
          {{ $t('headings.the_czech_vuejs_conference') }}
        </p>
      </section>

      <section class="flex flex-col items-center gap-4" aria-label="Event details">
        <div class="flex flex-col items-center">
          <p class="text-xs uppercase text-text-muted">
            When
          </p>
          <p class="text-sm sm:text-lg md:text-3xl text-center font-bold">
            {{ $t('2025.when') }}
          </p>
        </div>

        <div class="flex flex-col items-center">
          <p class="text-xs uppercase text-text-muted">
            Where
          </p>
          <p class="text-sm sm:text-lg md:text-xl text-center text-primary underline">
            <UiLink
              to="https://www.hotel-grandium.cz/"
              class="hover:text-primary-light"
              variant="ghost"
              title="Visit Hotel Grandium Prague website"
              aria-label="Visit Hotel Grandium Prague website"
            >
              {{ $t('2025.where') }}
            </UiLink>
          </p>
        </div>
      </section>

      <nav class="flex flex-col gap-4 items-center pt-6" aria-label="Event actions">
        <UiLink suffix-icon="🎫" href="https://pragvue.konference.cz/" aria-label="Buy tickets for PragVue conference">
          {{ $t('buttons.tickets_1') }}
        </UiLink>

        <div class="flex flex-row gap-4">
          <UiLink
            suffix-icon="🗺️"
            href="https://maps.app.goo.gl/vWW31EiriqbdCpTW8"
            variant="secondary"
            title="View location on Google Maps"
            aria-label="View location of the event on Google Maps"
          >
            {{ $t('2025.map') }}
          </UiLink>
          <UiButton
            suffix-icon="📅"
            variant="secondary"
            title="Add event to calendar"
            aria-label="Add event to calendar"
            @click="generateICalFile"
          >
            {{ 'Add to calendar' }}
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
