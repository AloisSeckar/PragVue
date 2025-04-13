<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <article
        class="flex flex-col gap-4"
        role="region"
        aria-labelledby="heading-about-the-conference"
      >
        <UiHeading id="heading-about-the-conference">
          {{ $t('headings.about_the_conference') }}
        </UiHeading>

        <p class="text-base text-left ">
          {{ $t('pages.home.conference_info_1') }}
        </p>

        <p class="text-base text-left">
          {{ $t('pages.home.conference_info_2') }}
        </p>
      </article>

      <div
        :style="{ height: elementDimension.height + 'px', width: elementDimension.width + 'px' }"
        class="relative max-lg:flex justify-center"
      >
        <HeroSectionTechnologies
          ref="heroSectionTechnologies"
          class="absolute sm:top-[-4rem] lg:top-[4rem] lg:left-0 2xl:left-[2rem]"
          aria-hidden="true"
        />
      </div>
    </LayoutContainerContent>

    <LayoutContainerContent>
      <article
        class="flex flex-col gap-4 items-start justify-start w-full"
        role="region"
        aria-labelledby="heading-tickets"
      >
        <UiHeading id="heading-tickets">
          {{ $t('headings.tickets') }}
        </UiHeading>

        <section class="flex flex-col gap-4 items-center justify-center w-full" aria-label="Early bird tickets">
          <p id="early-bird-title" class="font-bold text-center">
            {{ $t('pages.home.early_bird_tickets') }}
          </p>

          <span
            class="text-3xl line-through text-neutral-400 font-medium"
            aria-label="Original price 249 euros"
          >
            €249
          </span>

          <span
            class="text-4xl font-extrabold text-primary-light"
            aria-label="Special price 199 euros"
          >
            €199
          </span>

          <div class="flex flex-col gap-4 items-center justify-center">
            <UiLink
              suffix-icon="🎫"
              href="https://pragvue.konference.cz/"
              aria-label="Buy early bird tickets for PragVue conference"
            >
              {{ $t('buttons.tickets_2') }}
            </UiLink>

            <p class="text-center text-balance text-sm">
              {{ $t('pages.home.early_bird_tickets_info') }}
            </p>
          </div>
        </section>
      </article>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script lang="ts" setup>
import { useTemplateRef } from '#imports'

const heroSectionTechnologies = useTemplateRef('heroSectionTechnologies')

const elementDimension = ref({ width: 0, height: 275 })

onMounted(async () => {
  await nextTick()

  watch(
    heroSectionTechnologies,
    (el) => {
      if (!el) return
      useResizeObserver(heroSectionTechnologies, (entries) => {
        if (!entries[0]) return
        const { width, height } = entries[0].contentRect
        elementDimension.value = { width, height }
      })
    },
    { immediate: true },
  )
})
</script>
