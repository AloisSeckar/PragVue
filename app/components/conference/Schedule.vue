<template>
  <section class="schedule" aria-label="Conference Schedule">
    <UiHeading class="mb-6 text-[#ccc] font-xl">
      {{ $t('headings.the_schedule') }}
    </UiHeading>

    <div v-for="item in scheduleItems" :key="item.time" class="schedule-row border-b border-[#ccc] odd:text-vue even:text-vue-light hover:bg-[#222]">
      <div class="pl-2 pr-8 whitespace-nowrap time">
        {{ item.time }}
      </div>
      <div class="talk">
        <div>
          <span class="text-[#ccc] font-bold">
            {{ item.title }}
          </span>
          <span v-if="item.speaker">
            ({{ item.speaker }})
          </span>
        </div>
        <details v-if="item.speaker">
          <summary>Talk details ℹ️</summary>
          <p class="text-[#ccc] text-sm pr-2 lg:text-justify">
            {{ item.details }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// technically not necessary (auto-import), but for better clarity
import { schedule } from '@/utils/schedule-2025'

type ScheduleItem = {
  time: string
  title: string
  speaker?: string
  details?: string
}

const scheduleItems: ScheduleItem[] = schedule as ScheduleItem[]
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
