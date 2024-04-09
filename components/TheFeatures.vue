<template>
  <div class="flex flex-col gap-2 px-4 items-center justify-start bg-[#dddddd] text-black">
    <a name="features"><h2 class="mt-4 mb-4 text-4xl text-[#ff6c43] font-bold">{{ $t('features.title') }}</h2></a>
    <div class="text-xl">
      {{ $t('features.technology') }}
    </div>
    <a href="https://www.konference.cz/" class="mb-4 rounded-lg hover:border-2 hover:border-[#ff6c43]" :title="$t('idea.join')">
      <img src="/nav-features-1.jpg" class="rounded-lg w-[300px] h-[150px]" alt="Feature - cool technology">
    </a>
    <div class="text-xl">
      {{ $t('features.people') }}
    </div>
    <a href="https://www.konference.cz/" class="mb-4 rounded-lg hover:border-2 hover:border-[#ff6c43]" :title="$t('idea.join')">
      <img src="/nav-features-2.jpg" class="rounded-lg w-[300px] h-[150px]" alt="Feature - like minded people">
    </a>
    <div class="text-xl">
      {{ $t('features.food') }}
    </div>
    <a href="https://www.konference.cz/" class="mb-4 rounded-lg hover:border-2 hover:border-[#ff6c43]" :title="$t('idea.join')">
      <img src="/nav-features-3.jpg" class="rounded-lg w-[300px] h-[150px]" alt="Feature - free food">
    </a>
    <div class="text-xl">
      {{ $t('features.offer') }}
    </div>
    <a href="https://www.konference.cz/" class="mb-4 rounded-lg hover:border-2 hover:border-[#ff6c43]" :title="$t('idea.join')">
      <img src="/nav-features-4.jpg" class="rounded-lg w-auto h-[300px]" alt="Feature - good offer">
    </a>
    <div class="text-2xl font-bold">
      {{ $t('features.action') }}
    </div>
    <div class="text-2xl">
      {{ $t('features.price') }}
    </div>
    <a href="https://www.konference.cz/">
      <button class="inline-block my-4 mx-auto px-4 py-3 border-2 border-[#ff6c43] rounded-lg text-3xl font-bold hover:border-amber-500 hover:text-amber-500 hover:font-bold hover:bg-gray-600" :title="$t('idea.join')">
        {{ $t('features.register') }} ✍️
      </button>
    </a>
    <div class="w-5/6 mx-auto mb-2 border-t-2 border-black text-center text-lg">
      &copy; 2024 <a href="https://digitalnispolecnost.cz/" class=" hover:text-[#ff6c43]">Eviden Czech Republic</a>
    </div>
  </div>
</template>
