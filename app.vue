<template>
  <div class="h-screen flex flex-col items-center justify-center bg-[url('/bg-light.jpg')] dark:bg-[url('/bg-dark.jpg')] bg-top bg-cover opacity-95 p-2">
    <div class="w-full sm:w-4/5 lg:w-1/2 m-2 mt-20 p-8 text-center bg-slate-900 opacity-90 text-[#ff6c43] border border-black rounded-xl">
      <div>
        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
        </ClientOnly>
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
import type { ClientOnly } from '#build/components'

useHead({
  title: 'PragVue 2024',
  htmlAttrs: {
    lang: 'cs'
  }
})

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
