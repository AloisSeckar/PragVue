<template>
  <section class="schedule" aria-label="Conference Schedule">
    <UiHeading class="mb-6 text-[#ccc] font-xl">
      {{ $t('headings.the_schedule') }}
    </UiHeading>

    <div v-for="item in schedule" :key="item.time" class="schedule-row border-b border-[#ccc] odd:text-vue odd:hover:text-emerald-300 even:text-vue-light even:hover:text-yellow-300 hover:bg-[#222]">
      <div class="pl-2 pr-8 whitespace-nowrap time">
        {{ item.time }}
      </div>
      <div class="talk">
        <div>
          <span class="text-[#ccc] font-bold">
            {{ item.info?.title || item.event }}
          </span>
          <span v-if="item.info">
            (<NuxtLink :to="`https://github.com/${item.info.github}`" class="hover:underline">
              {{ item.info.name }}
            </NuxtLink>)
          </span>
        </div>
        <details v-if="item.info">
          <summary title="Click for more info" class="cursor-pointer">
            <span class="hover:underline">Talk details</span> ℹ️
          </summary>
          <p class="text-[#ccc] text-sm pr-2 lg:text-justify">
            {{ item.info.details }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { schedule } from '~/data/schedule-2025'
import { speakers } from '~/data/speakers-2025'

// merge speaker info into schedule items based on "speaker" (= github name) field
schedule.forEach((item) => {
  if (item.speaker) {
    item.info = speakers.find(speaker => speaker.github === item.speaker)
  }
})
</script>

<style scoped>
 /* Container for the whole schedule */
.schedule {
    max-width: 830px;
    margin: 0 auto;
    padding: 1rem;
    font-family: sans-serif;
}

/* Header row (if needed) */
.schedule-row {
    display: grid;
    grid-template-columns: 120px 1fr;
    align-items: center;
    padding: 0.5rem 0;
}

/* Mobile: stack into single column */
@media (max-width: 600px) {
    .schedule-row {
        grid-template-columns: 1fr;
    }
    .time {
        font-weight: bold;
        margin-bottom: 0.25rem;
    }
}
</style>
