<template>
  <section class="schedule" aria-label="Conference Schedule">
    <UiHeading class="mb-6 text-[#ccc] font-xl">
      {{ $t('headings.the_schedule') }}
    </UiHeading>

    <div v-for="item in schedule" :key="item.time" class="schedule-row border-b border-[#ccc] odd:text-vue even:text-vue-light">
      <div class="pl-2 pr-8 whitespace-nowrap time">
        {{ item.time }}
      </div>
      <div class="talk">
        <span class="text-[#ccc] font-bold">
          {{ item.title }}
        </span>
        <span v-if="item.speaker">
          ({{ item.speaker }})
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type ScheduleItem = {
  time: string
  title: string
  speaker?: string
}

const schedule: ScheduleItem[] = [
  {
    time: '08:30',
    title: 'Doors open',
  },
  {
    time: '09:00',
    title: 'Keynote & VoidZero',
    speaker: 'Alex Lichter',
  },
  {
    time: '09:30',
    title: 'Dungeons & Developers - patterns for great DX',
    speaker: 'Jakub Andrzejewski',
  },
  {
    time: '10:00',
    title: 'What the new European Accessibility Act Means for Web Developers',
    speaker: 'Louëlla Creemers',
  },
  {
    time: '10:30',
    title: 'Coffee Break ☕🥐',
  },
  {
    time: '11:00',
    title: 'Overcoming third-party script headaches in Vue with a single library',
    speaker: 'Julien Huang',
  },
  {
    time: '11:30',
    title: 'From Object to Interface—Serialized Forms with Vueform',
    speaker: 'Adam Berecz',
  },
  {
    time: '12:00',
    title: 'Revamping Your Vue.js Stack: Lessons from a Real Migration',
    speaker: 'Raí Siqueira',
  },
  {
    time: '12:30',
    title: 'Lunch Break 🍲🧆',
  },
  {
    time: '13:30',
    title: 'How to Make Open Source Profitable',
    speaker: 'Anastasiia Zvenigorodskaia',
  },
  {
    time: '14:00',
    title: 'What to expect in the v5 of TresJS',
    speaker: 'Alvaro Saburido Rodriguez',
  },
  {
    time: '14:30',
    title: 'How to Nuxt Modules',
    speaker: 'Thorsten Seyschab',
  },
  {
    time: '15:00',
    title: 'Coffee Break ☕🥐',
  },
  {
    time: '15:30',
    title: 'The land of the VueJS.land',
    speaker: 'Konstantin Bifert',
  },
  {
    time: '16:00',
    title: 'Scaling Vue in Enterprise SaaS: Lessons from the Trenches',
    speaker: 'Juan Andrés Núñez',
  },
  {
    time: '16:30',
    title: 'How to Structure Vue Projects',
    speaker: 'Alexander Opalic',
  },
  {
    time: '17:00',
    title: 'Ignite your Nuxt development with Layers',
    speaker: 'Alois Sečkár',
  },
]
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
