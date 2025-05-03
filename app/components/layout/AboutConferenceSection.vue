<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading id="heading-about-the-conference">
        {{ $t('headings.about_the_conference') }}
      </UiHeading>
      <div class="contents lg:flex lg:w-full">
        <article
          class="flex flex-col gap-4 lg:max-w-[50%]"
          role="region"
          aria-labelledby="heading-about-the-conference"
        >
          <p class="text-base sm:text-lg text-left">
            {{ $t('pages.home.conference_info_1') }}
          </p>

          <p class="text-base sm:text-lg text-left">
            {{ $t('pages.home.conference_info_2') }}
          </p>
          <section
            class="flex flex-col py-10 lg:flex-row gap-4 sm:gap-6 items-center justify-center w-full lg:pt-10"
            aria-label="Early bird tickets"
          >
            <div
              class="flex flex-col gap-4 lg:flex lg:flex-col lg:flex-1 lg:gap-3 lg:items-center lg:max-w-[50%]"
            >
              <p
                id="early-bird-title"
                class="text-center text-base sm:text-xl font-bold"
              >
                {{ $t('pages.home.early_bird_tickets') }}*
              </p>
              <div class="flex gap-3 items-center lg:contents">
                <span
                  class="text-3xl sm:text-4xl line-through text-neutral-400 font-medium"
                  aria-label="Original price 249 euros"
                >
                  €249
                </span>

                <span
                  class="text-4xl sm:text-5xl font-extrabold text-primary-light"
                  aria-label="Special price 199 euros"
                >
                  €199
                </span>
              </div>
              <p
                class="hidden lg:block text-center text-balance text-xs sm:text-lg"
              >
                *{{ $t('pages.home.early_bird_tickets_info') }}
              </p>
            </div>
            <div
              class="flex flex-col gap-4 items-center justify-center lg:max-w-[50%]"
            >
              <UiLink
                to="https://pragvue.konference.cz/"
                aria-label="Buy early bird tickets for PragVue conference"
              >
                {{ $t('buttons.tickets_2') }}
                <template #suffix>
                  <IconNuxtIcon name="ticket" :size="{ base: 'sm' }" />
                </template>
              </UiLink>

              <p
                class="lg:hidden text-center text-balance text-base sm:text-lg"
              >
                *{{ $t('pages.home.early_bird_tickets_info') }}
              </p>
            </div>
          </section>
        </article>

        <div
          class="relative h-80 w-full max-lg:flex justify-center lg:max-w-[50%]"
        >
          <HeroSectionTechnologies
            ref="heroSectionTechnologies"
            aria-hidden="true"
          />
        </div>
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>
