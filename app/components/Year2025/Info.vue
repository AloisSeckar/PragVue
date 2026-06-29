<template>
  <LayoutContainer class="overflow-hidden grid lg:grid-cols-2">
    <div>
      <Year2024UiHeading class="mb-6 text-vue">
        {{ $t('headings.about_the_conference') }}
      </Year2024UiHeading>

      <p class="tracking-[0.01em] max-w-[64ch] mb-4 text-left">
        {{ $t('pages.home.conference_info_1') }}
      </p>

      <p class="tracking-[0.01em] max-w-[64ch] text-left">
        {{ $t('pages.home.conference_info_2') }}
      </p>
    </div>

    <div class="mb-8 h-68 sm:h-100 lg:h-150 relative max-lg:flex justify-center">
      <HeroSectionTechnologies class="absolute sm:-top-16 lg:top-16 lg:left-0 2xl:left-8" />
    </div>

    <!-- <ConferenceTickets /> -->
  </LayoutContainer>
</template>
