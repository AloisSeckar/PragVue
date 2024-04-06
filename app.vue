<template>
  <div class="flex flex-col h-screen items-center justify-center bg-[#3c3c3c]">
    <div class="w-full max-w-[800px] h-[256px] cursor-pointer bg-white bg-[url('/prague.webp')] bg-center bg-cover" />
    <div class="w-full max-w-[800px] flex-grow bg-[#1a1a1a]" />
    <div class="w-full max-w-[800px] px-8 py-6 text-center text-[#ff6c43] absolute bottom-12">
      <!-- <TheLanguageSelector /> -->
      <a href="https://digitalnispolecnost.cz/">
        <img
          class="inline-block mx-auto my-4 w-[200px] cursor-pointer"
          src="/eviden.webp"
        >
      </a>
      <div class="text-xl">
        {{ $t('info.presents') }}
      </div>
      <div class="flex flex-col min-[660px]:flex-row justify-center mb-4">
        <img
          class="hidden min-[660px]:inline-block mx-auto min-[660px]:mx-0 w-28 h-28 cursor-pointer opacity-100"
          src="/logo-vue.webp"
        >
        <h1 class="inline-block mx-4 text-[72px] font-bold">
          PragVue 2024
        </h1>
        <img
          class="hidden min-[660px]:inline-block mx-auto min-[660px]:mx-0 w-28 h-28 cursor-pointer opacity-100"
          src="/logo-prg.webp"
        >
      </div>
      <div class="mb-1 text-2xl">
        {{ $t('info.about') }}
      </div>
      <div class="mb-1 text-2xl font-bold">
        {{ $t('info.date') }}
      </div>
      <div class="mb-6 text-xl">
        {{ $t('info.place') }}
        <a href="https://maps.app.goo.gl/BksoN2qFxf61Tn2v8">🗺️</a>
      </div>
      <button class="inline-block mx-auto px-4 py-2 border-2 border-[#ff6c43] rounded-lg text-xl hover:border-amber-500 hover:text-amber-500 hover:font-bold hover:bg-gray-600">
        {{ $t('info.more') }} 🕵️
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const storedLocale = useLocalStorage('pragvue-lang', 'en')

if (storedLocale.value && typeof storedLocale.value === 'string') {
  locale.value = storedLocale.value
}

useHead({
  title: 'PragVue 2024',
  htmlAttrs: {
    lang: 'cs',
  },
})
</script>
