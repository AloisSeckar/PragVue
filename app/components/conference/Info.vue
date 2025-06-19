<template>
  <LayoutContainer class="overflow-hidden">
    <LayoutContainerContent class="grid lg:grid-cols-2">
      <div>
        <UiHeading class="mb-6 text-vue-light">
          {{ $t('headings.about_the_conference') }}
        </UiHeading>

        <p class="tracking-[0.01em] max-w-[64ch] mb-4 text-left">
          {{ $t('pages.home.conference_info_1') }}
        </p>

        <p class="tracking-[0.01em] max-w-[64ch] text-left">
          {{ $t('pages.home.conference_info_2') }}
        </p>
      </div>

      <div class="mb-8 h-[275px] sm:h-[400px] lg:h-[600px] relative max-lg:flex justify-center">
        <HeroSectionTechnologies class="absolute sm:top-[-4rem] lg:top-[4rem] lg:left-0 2xl:left-[2rem]" />
      </div>
    </LayoutContainerContent>

    <ConferenceTickets />
  </LayoutContainer>
</template>
