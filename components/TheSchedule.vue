<template>
  <a name="schedule" />
  <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-screen p-8 items-center justify-start bg-[url('/bg2.jpg')] bg-center bg-cover">
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
      <div class="flex gap-2 justify-end">
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
        <div class="flex flex-col gap-2 text-lg">
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
        <div class="mt-4 text-lg text-center text-[#ff6c43]">
          More details will be unveiled soon
        </div>
      </div>
    </div>

    <!--
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
    -->
  </div>
</template>
