<template>
  <a name="features" />
  <div class="flex flex-col lg:flex-row gap-8 min-h-screen p-8 items-center justify-start bg-[#dddddd] text-black">
    <div class="inline-block lg:w-1/2 text-center lg:text-right text-xl">
      <div class="inline-block mb-4 text-[34px] font-bold">
        {{ $t('features.title') }}
      </div>
      <p>
        {{ $t('features.technology') }}
      </p>
      <p>
        {{ $t('features.people') }}
      </p>
      <p class="font-bold">
        {{ $t('features.food') }}
      </p>
      <p class="mb-4">
        {{ $t('features.offer') }}
      </p>
      <a href="#ticket">
        <button class="inline-block mx-auto px-10 py-4 bg-[#002D3C] rounded-3xl text-2xl text-white font-bold hover:text-black hover:border-2 hover:border-black hover:bg-white">
          {{ $t('features.ticket') }}
        </button>
      </a>
    </div>

    <div class="inline-block lg:w-1/2 text-center lg:text-left">
      <img src="/features.png" class="w-auto h-[240px]" alt="PragVue 2024 features">
    </div>
  </div>
</template>
