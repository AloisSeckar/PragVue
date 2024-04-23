<template>
  <a name="idea" />
  <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-screen p-8 items-center justify-start bg-[#dddddd] text-black">
    <div class="inline-block lg:w-1/2 lg:text-right">
      <p class="text-2xl font-bold">
        {{ $t('idea.q1') }}
      </p>
      <p class="text-lg mb-4">
        {{ $t('idea.a1') }}
      </p>
      <p class="text-2xl font-bold">
        {{ $t('idea.q2') }}
      </p>
      <p class="text-lg mb-4">
        {{ $t('idea.a2') }}
      </p>
      <p class="text-2xl font-bold">
        {{ $t('idea.q3') }}
      </p>
      <p class="text-lg mb-4">
        {{ $t('idea.a3') }}
      </p>
      <p class="text-lg mb-8">
        {{ $t('idea.idea') }}
      </p>
      <p class="text-2xl font-bold text-center lg:text-right">
        {{ $t('idea.action') }}
      </p>
    </div>

    <div class="inline-block lg:w-1/2 text-center lg:text-left">
      <div class="inline-block text-[66px]">
        <span class="font-bold">PragVue</span> 2024
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="text-2xl mb-2" v-html="$t('idea.title')" />
      <p class="text-2xl mb-8">
        {{ $t('idea.date') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-2">
        <a href="https://pragvue.konference.cz/">
          <button class="inline-block mx-auto px-10 py-4 bg-[#002D3C] rounded-3xl text-2xl text-white font-bold hover:text-black hover:border-2 hover:border-black hover:bg-white">
            {{ $t('intro.register') }}
          </button>
        </a>
        <a href="#schedule">
          <button class="inline-block mx-auto px-10 py-4 bg-[#002D3C] rounded-3xl text-2xl text-white font-bold hover:text-black hover:border-2 hover:border-black hover:bg-white">
            {{ $t('intro.more') }}
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
