<template>
  <div class="flex flex-col min-h-screen items-center justify-center bg-[url('/bg1.jpg')] bg-center bg-cover">
    <div class="w-full max-w-[800px] p-2 flex flex-col flex-grow justify-center text-center">
      <div class="flex flex-col sm:flex-row gap- my-4 justify-center items-center text-[#dddddd] font-bold">
        <a href="https://digitalnispolecnost.cz/">
          <img class="inline-block w-auto h-7 sm:h-8 cursor-pointer mr-4" src="/eviden.webp" alt="Eviden logo">
        </a>
        <span class="hidden sm:inline">&</span>
        <a href="https://www.exponet.cz/">
          <img class="inline-block w-auto h-10 sm:h-14 cursor-pointer" src="/exponet.png" alt="Exponet logo">
        </a>
      </div>
      <div class="text-xl text-[#dddddd] mb-8">
        {{ $t('intro.present') }}
      </div>
      <div>
        <img class="inline-block w-auto h-20 cursor-pointer" src="/vue.png" alt="Vue.js logo">
      </div>
      <div class="flex flex-col min-[660px]:flex-row justify-center mb-4">
        <h1 class="inline-block mx-4 text-[52px] sm:text-[72px]">
          <span class="font-bold">PragVue</span> 2024
        </h1>
      </div>
      <div class="mb-1 text-2xl text-[#dddddd]">
        {{ $t('intro.about') }}
      </div>
      <div class="mb-1 text-2xl font-bold">
        {{ $t('intro.date') }}
      </div>
      <div class="mb-10 text-xl text-[#dddddd]">
        {{ $t('intro.place') }}
        <a href="https://maps.app.goo.gl/BksoN2qFxf61Tn2v8">🗺️</a>
      </div>
      <a href="#idea">
        <button class="inline-block mx-auto px-12 py-4 bg-[#dddddd] rounded-3xl text-2xl text-black font-bold hover:text-[#dddddd] hover:border-2 hover:border-[#dddddd] hover:bg-[#002D3C]">
          {{ $t('intro.more') }}
        </button>
      </a>
    </div>
  </div>
</template>
