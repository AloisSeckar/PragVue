<template>
  <span>
    <span class="text-white">Prag</span>
    <span class="text-vue">Vue</span>
    <span class="text-vue-light">{{ year }}</span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  year: number
}>()
</script>
