<template>
  <div class="flex flex-col min-h-screen px-4 pb-6 items-center justify-start  bg-[#3c3c3c]">
    <a name="schedule"><h2 class="mt-4 mb-4 text-4xl text-[#ff6c43] font-bold">{{ $t('schedule.title') }}</h2></a>
    <p>
      {{ $t('intro.date') }}
      {{ $t('intro.place') }}
      <a href="https://maps.app.goo.gl/BksoN2qFxf61Tn2v8">🗺️</a>
    </p>
    <div class="flex flex-col lg:flex-row gap-0 lg:gap-4 my-2 text-xl">
      <div class="flex flex-col gap-2">
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            09:00 - 09:15
          </div>
          <div>
            Vue App in 15 mins
          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            09:15 - 09:50
          </div>
          <div>
            Keynote - what's new in Vue.js?
          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            09:50 - 10:30
          </div>
          <div>
            To the roots of Vue
          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            10:30 - 10:50
          </div>
          <div>
            1st Coffee Break 🥐☕
          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            10:50 - 11:25
          </div>
          <div>
            Meet Nuxt
          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            11:25 - 12:00
          </div>
          <div>
            Introduction to Vue ecosystem
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            12:00 - 13:00
          </div>
          <div>
            Lunch Break 🍽️🥗
          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            13:00 - 13:40
          </div>
          <div>
            TBA
          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            13:40 - 14:20
          </div>
          <div>
            TBA
          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            14:20 - 14:40
          </div>
          <div>
            2nd Coffee Break 🥐☕
          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            14:40 - 15:20
          </div>
          <div>
            Case study - implementing Nuxt/Vue
          </div>
        </div>
        <div class="flex gap-4">
          <div class="font-bold text-nowrap">
            15:20 - 16:00
          </div>
          <div>
            TBA
          </div>
        </div>
      </div>
    </div>
    <div class="flex mt-4 gap-2">
      <a href="https://www.konference.cz/" class="rounded-lg hover:border-2 hover:border-[#ff6c43]" :title="$t('schedule.join')">
        <img src="/nav-schedule-join.jpg" class="rounded-lg w-[250px] h-[120px]" alt="Join PragVue conference">
      </a>
      <a href="#features" class="rounded-lg hover:border-2 hover:border-[#ff6c43]" :title="$t('schedule.more')">
        <img src="/nav-schedule-more.jpg" class="rounded-lg w-[250px] h-[120px]" alt="Get more information">
      </a>
    </div>
  </div>
</template>
