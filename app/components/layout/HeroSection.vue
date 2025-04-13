<template>
  <LayoutContainer class="h-dvh relative isolation">
    <IconPragueSilhouette
      class="absolute bottom-0 inset-x-1/2 -z-10 pgv-hero-banner__bg"
      aria-hidden="true"
    />

    <section
      class="flex flex-row gap-4 justify-center items-center absolute top-0 left-1/2 -translate-x-1/2 p-2 w-full"
      aria-label="Sponsors"
    >
      <UiSponsorBox
        v-for="sponsor in sponsors"
        :key="sponsor.image"
        :to="sponsor.to"
        :image="sponsor.image"
        :title="sponsor.title"
        :alt="sponsor.alt"
        no-background
        size="sm"
      />
    </section>

    <LayoutContainerContent class="h-[calc(100%-32px)]">
      <div class="flex flex-col gap-3">
        <TheLogo tag="h1" />
        <p class="text-sm sm:text-lg md:text-2xl text-center">
          {{ $t('headings.the_czech_vuejs_conference') }}
        </p>
      </div>

      <section class="flex flex-col items-center gap-4" aria-label="Event details">
        <div class="flex flex-col items-center">
          <p id="event-date-label" class="text-xs uppercase text-text-muted">
            When
          </p>
          <p class="text-sm sm:text-lg md:text-3xl text-center font-bold" aria-labelledby="event-date-label">
            {{ $t('2025.when') }}
          </p>
        </div>

        <div class="flex flex-col items-center">
          <p id="event-location-label" class="text-xs uppercase text-text-muted">
            Where
          </p>
          <p class="text-sm sm:text-lg md:text-xl text-center text-primary underline" aria-labelledby="event-location-label">
            <UiLink
              to="https://www.hotel-grandium.cz/"
              class="hover:text-primary-light"
              variant="ghost"
              title="Visit Hotel Grandium Prague website"
            >
              {{ $t('2025.where') }}
            </UiLink>
          </p>
        </div>
      </section>

      <nav class="flex flex-col sm:flex-row gap-4 items-center pt-6" aria-label="Event actions">
        <UiLink suffix-icon="🎫" href="https://pragvue.konference.cz/">
          {{ $t('buttons.tickets_1') }}
        </UiLink>

        <UiLink
          suffix-icon="🗺️"
          href="https://maps.app.goo.gl/vWW31EiriqbdCpTW8"
          variant="secondary"
          title="View location on Google Maps"
        >
          {{ $t('2025.map') }}
        </UiLink>
      </nav>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const { sponsors } = useSponsorList()
</script>

  <style scoped>
  .pgv-hero-banner__bg {
    transform: translateX(-50%);
    width: clamp(1200px, 100%, 2000px);
  }
  </style>
