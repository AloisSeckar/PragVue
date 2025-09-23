<template>
  <span class="tracking-[1rem]">
    <span class="text-white tracking-[0.01em]">Prag</span>
    <span class="text-vue tracking-[0.01em]">Vue</span>
    <span v-if="year" class="text-vue-light tracking-[0.01em]">{{ year }}</span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  year?: number
}>()
</script>
