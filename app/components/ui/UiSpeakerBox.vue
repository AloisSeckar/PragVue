<template>
  <article
    class="flex flex-col gap-2 group"
    aria-labelledby="speaker-presentation"
  >
    <NuxtLink
      :to="`https://github.com/${github}`"
      :aria-label="$t('accessibility.visit_github_profile', { name })"
      class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
    >
      <div class="relative shrink-0 p-4">
        <UiImage
          class="w-44 h-44 rounded-full"
          :src="`https://github.com/${github}.png`"
          :title="name"
          :alt="$t('accessibility.photo_of_speaker_name', { name })"
          crossorigin="anonymous"
        />
        <NuxtImg
          class="absolute bottom-4 right-4"
          :src="`/flags/${countryCode}.png`"
          :alt="$t('accessibility.flag_of_country', { country })"
          :title="country"
          :width="60"
          :height="40"
          role="img"
        />
      </div>
      <div class="mx-auto max-w-52">
        <div
          class="font-bold text-text-main bg-primary-dark px-3 py-1 text-center rounded-lg flex items-center justify-center gap-2"
        >
          <div
            id="speaker-presentation"
            class="text-base break-words flex flex-col flex-1"
          >
            <span>{{ splitName.firstLine }}</span>
            <span>{{ splitName.secondLine }}</span>
          </div>
        </div>
      </div>
    </NuxtLink>

    <p
      class="max-w-[200px] text-sm text-center text-text-muted mx-auto"
      aria-labelledby="speaker-presentation"
    >
      {{ $t(`speakers.${github}`) }}
    </p>
  </article>
</template>

<script setup lang="ts">
type Props = {
  slide: {
    name: string
    github: string
    country: string
    countryCode: string
  }
}

const props = defineProps<Props>()

const { country, countryCode, github, name } = props.slide

const splitName = computed(() => {
  const name = props.slide.name

  const totalChars = name.length
  const halfwayPoint = Math.floor(totalChars / 2)

  let bestSplitPos = 0
  let bestDifference = Infinity

  for (let i = 0; i < totalChars; i++) {
    if (name[i] === ' ') {
      const difference = Math.abs(i - halfwayPoint)
      if (difference < bestDifference) {
        bestDifference = difference
        bestSplitPos = i
      }
    }
  }

  return {
    firstLine: name.substring(0, bestSplitPos).trim(),
    secondLine: name.substring(bestSplitPos + 1).trim(),
  }
})
</script>
