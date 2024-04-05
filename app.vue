<template>
  <div class="h-screen flex flex-col items-center justify-center bg-[url('/bg-dark.jpg')] bg-top bg-cover opacity-95 p-2">
    <div class="w-[calc(100%-16px)] md:w-5/6 lg:w-2/3 m-2 absolute bottom-8 px-4 py-6 text-center bg-slate-900 opacity-90 text-[#ff6c43] border border-black rounded-xl">
      <TheLanguageSelector />
      <div class="flex flex-col min-[660px]:flex-row justify-center mb-4">
        <img
          class="inline-block mx-auto min-[660px]:mx-0 w-28 h-28 cursor-pointer opacity-100"
          src="/logo2.webp"
        >
        <h1 class="inline-block ml-4 text-[72px] font-bold">
          PragVue 2024
        </h1>
      </div>
      <div class="mb-2 text-2xl">
        {{ $t('info.about') }}
      </div>
      <div class="mb-2 text-2xl font-bold">
        {{ $t('info.date') }}
      </div>
      <div>
        {{ $t('info.more') }}
      </div>
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
