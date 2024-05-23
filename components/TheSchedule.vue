<template>
  <a name="schedule" />
  <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-screen p-8 items-center justify-start bg-[url('/bg2.webp')] bg-center bg-cover">
    <div class="inline-block lg:w-1/2 text-center lg:text-right">
      <div class="inline-block text-[43px] font-bold">
        {{ $t('schedule.title') }}
      </div>
      <div class="mb-1 text-2xl font-bold">
        {{ $t('intro.date') }}
      </div>
      <div class="mb-10 text-xl text-[#dddddd]">
        {{ $t('intro.place') }}
        <a href="https://maps.app.goo.gl/BksoN2qFxf61Tn2v8">🗺️</a>
      </div>
      <div class="flex flex-col sm:flex-row gap-2 justify-end">
        <a href="https://pragvue.konference.cz/">
          <button class="inline-block mx-auto px-10 py-4 bg-[#dddddd] rounded-3xl text-2xl text-black font-bold hover:text-white hover:border-2 hover:border-white hover:bg-[#002D3C]">
            {{ $t('intro.register') }}
          </button>
        </a>
        <a href="#features">
          <button class="inline-block mx-auto px-10 py-4 bg-[#dddddd] rounded-3xl text-2xl text-black font-bold hover:text-white hover:border-2 hover:border-white hover:bg-[#002D3C]">
            {{ $t('intro.more') }}
          </button>
        </a>
      </div>
    </div>

    <div class="inline-block lg:w-1/2 text-center lg:text-left">
      <div class="px-6 py-4 bg-[#dddddd] text-black rounded-xl">
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
