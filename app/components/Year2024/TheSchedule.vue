<template>
  <a name="schedule" />
  <div :class="PAGE_BLOCK" class="bg-[url('/bg2.webp')]">
    <div :class="CONTENT_LEFT" class="lg:w-1/3">
      <div class="inline-block text-[43px] font-bold">
        {{ $t('schedule.title') }}
      </div>
      <div class="mb-10 text-2xl font-bold">
        {{ $t('intro.date') }}
      </div>
      <div class="mb-10 text-xl text-[#dddddd]">
        {{ $t('intro.place') }}
        <a href="https://maps.app.goo.gl/kYzHaNKrc346BVfbA">🗺️</a>
      </div>
      <div class="flex flex-col sm:flex-row gap-2 justify-end">
        <a href="https://pragvue.konference.cz/" class="hidden">
          <button :class="BUTTON_LIGHT">
            {{ $t('intro.register') }}
          </button>
        </a>
        <a href="#features">
          <button :class="BUTTON_LIGHT">
            {{ $t('intro.more') }}
          </button>
        </a>
      </div>
    </div>

    <div :class="CONTENT_RIGHT" class="lg:w-2/3">
      <div :class="CARD_GRAY">
        <UTabs :items="tabs" :ui="tabsUi" class="w-full">
          <template #default="{ item }">
            <div class="w-full text-2xl font-bold">
              {{ item.label }}
            </div>
          </template>
          <template #speakers>
            <TheScheduleTabSpeakers />
          </template>
          <template #schedule>
            <TheScheduleTabSchedule />
          </template>
        </UTabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tabs = [{
  slot: 'speakers',
  label: 'Speakers',
}, {
  slot: 'schedule',
  label: 'Schedule',
}]

const tabsUi = {
  list: {
    height: 'h-12',
    tab: {
      base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out hover:text-white hover:border-2 hover:border-white hover:bg-[#002D3C]',
      active: 'text-gray-900 border border-black',
      inactive: 'text-gray-500',
      height: 'h-10',
    },
  },
}
</script>
