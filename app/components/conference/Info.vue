<template>
  <LayoutContainer class="overflow-hidden">
    <LayoutContainerContent class="grid lg:grid-cols-2">
      <div>
        <UiHeading class="mb-6 text-vue-light">
          {{ $t('headings.about_the_conference') }}
        </UiHeading>

        <p class="tracking-[0.01em] max-w-[64ch] mb-4 text-center min-[450px]:text-left">
          {{ $t('pages.home.conference_info_1') }}
        </p>

        <p class="tracking-[0.01em] max-w-[64ch] text-center min-[450px]:text-left">
          {{ $t('pages.home.conference_info_2') }}
        </p>
      </div>

      <div class="mb-8 h-[275px] sm:h-[400px] lg:h-[600px] relative max-lg:flex justify-center">
        <HeroSectionTechnologies class="absolute sm:top-[-4rem] lg:top-[4rem] lg:left-0 2xl:left-[2rem]" />
      </div>
    </LayoutContainerContent>

    <LayoutContainerContent>
      <div class="mb-6 flex flex-col items-center">
        <UiHeading class="mb-6 text-vue">
          {{ $t('headings.tickets') }}
        </UiHeading>

        <div class="text-2xl font-bold text-center mb-4 inline">
          {{ $t('pages.home.early_bird_tickets') }}
        </div>

        <span class="pgv-price pgv-price--full text-woodsmoke-400">
          €249
        </span>

        <span class="pgv-price relative -top-2 text-vue-light">
          €199
        </span>
      </div>

      <div class="flex flex-col gap-4 items-center justify-center">
        <UiButtonIcon icon="🎫" href="https://pragvue.konference.cz/" :label="$t('buttons.tickets_2')" />

        <p class="mb-8 max-w-[24ch] text-center text-balance text-woodsmoke-300 text-sm">
          {{ $t('pages.home.early_bird_tickets_info') }}
        </p>
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<style scoped>
.pgv-price {
  font-size: 3.5rem;
  font-weight: 800;
}

.pgv-price--full {
  font-size: 2.5rem;
  text-decoration: line-through;
  font-weight: 500;
}
</style>
