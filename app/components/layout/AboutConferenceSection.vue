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

        <p class="text-base text-left">
          {{ $t('pages.home.conference_info_1') }}
        </p>

        <p class="text-base text-left">
          {{ $t('pages.home.conference_info_2') }}
        </p>
      </article>

      <div
        :style="{
          height: elementDimension.height + 'px',
          width: elementDimension.width + 'px',
        }"
        class="relative max-lg:flex justify-center"
      >
        <HeroSectionTechnologies
          ref="heroSectionTechnologies"
          class="absolute sm:top-[-4rem] lg:top-[4rem] lg:left-0 2xl:left-[2rem]"
          aria-hidden="true"
        />
      </div>
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
