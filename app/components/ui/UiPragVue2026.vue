<template>
  <span class="pragvue-logo group inline-flex items-end tracking-[1rem] select-none">
    <span
      class="tracking-[0.01em] leading-tight pb-[0.15em] bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
    >
      Prag
    </span>
    <span
      class="tracking-[0.01em] leading-tight pb-[0.15em] bg-gradient-to-b from-vue to-teal-800 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(66,184,131,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_24px_rgba(66,184,131,0.6)]"
    >
      Vue
    </span>
    <span
      v-if="year"
      class="tracking-[0.01em] ml-1 leading-tight pb-[0.15em] bg-gradient-to-b from-vue-light to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(254,240,138,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(254,240,138,0.6)]"
    >
      {{ year }}
    </span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  year?: number
}>()
</script>

<style scoped>
.pragvue-logo {
  position: relative;
}
</style>
