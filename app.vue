<template>
  <div class="h-screen flex flex-col items-center justify-center bg-[url('/bg-dark.jpg')] bg-top bg-cover opacity-95 p-2">
    <div class="w-full sm:w-4/5 lg:w-1/2 m-2 absolute bottom-8 p-8 text-center bg-slate-900 opacity-90 text-[#ff6c43] border border-black rounded-xl">
      <div>
        <img class="w-32 h-32 mx-auto cursor-pointer opacity-100" src="/logo.webp">
        <h1 class="mb-4 text-4xl font-bold">
          PragVue
        </h1>
        <div class="mb-2 text-2xl">
          Vue.js konference
        </div>
        <div class="mb-2 text-2xl font-bold">
          Září 2024
        </div>
        <div>
          MORE TO COME
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'PragVue 2024',
  htmlAttrs: {
    lang: 'cs'
  }
})
</script>
