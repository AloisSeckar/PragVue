<template>
  <div class="flex flex-col h-screen items-center justify-center bg-[#3c3c3c]">
    <div class="w-full max-w-[800px] h-[256px] cursor-pointer bg-white bg-[url('/prague.webp')] bg-center bg-cover" />
    <div class="w-full max-w-[800px] flex-grow bg-[#1a1a1a]" />
    <div class="w-full max-w-[800px] px-8 py-6 text-center text-[#ff6c43] absolute bottom-8 sm:bottom-32">
      <TheLanguageSelector />
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center text-white font-bold">
        <a href="https://vuejs.org/">
          <img class="inline-block mx-auto my-4 w-auto h-[40px] cursor-pointer" src="/vue.png">
        </a>
        <span class="hidden sm:inline">&</span>
        <a href="https://digitalnispolecnost.cz/">
          <img class="inline-block mx-auto my-4 w-auto h-[40px] cursor-pointer" src="/eviden.webp">
        </a>
        <span class="hidden sm:inline">&</span>
        <a href="https://www.exponet.cz/">
          <img class="inline-block mx-auto my-4 w-auto h-[40px] cursor-pointer" src="/exponet.png">
        </a>
      </div>
      <div class="text-xl text-white">
        {{ $t('info.presents') }}
      </div>
      <div class="flex flex-col min-[660px]:flex-row justify-center mb-4">
        <h1 class="inline-block mx-4 text-[72px] font-bold">
          PragVue 2024
        </h1>
      </div>
      <div class="mb-1 text-2xl text-white">
        {{ $t('info.about') }}
      </div>
      <div class="mb-1 text-2xl font-bold">
        {{ $t('info.date') }}
      </div>
      <div class="mb-6 text-xl text-white">
        {{ $t('info.place') }}
        <a href="https://maps.app.goo.gl/BksoN2qFxf61Tn2v8">🗺️</a>
      </div>
      <a href="#idea">
        <button class="inline-block mx-auto px-4 py-2 border-2 border-[#ff6c43] rounded-lg text-xl hover:border-amber-500 hover:text-amber-500 hover:font-bold hover:bg-gray-600">
          {{ $t('info.more') }} 🕵️
        </button>
      </a>
    </div>
  </div>
</template>
