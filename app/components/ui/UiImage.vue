<template>
  <div class="relative">
    <!--  TODO: switch to NuxtImg  -->
    <img
      class="absolute inset-0 w-full h-full rounded-full"
      :class="{
        'object-cover': fit === 'cover',
        'object-contain': fit === 'contain',
      }"
      :src="src"
      :alt="alt || ''"
      loading="lazy"
    >
  </div>
</template>

<script setup lang="ts">
const {
  src,
  alt,
  fit = 'cover',
} = defineProps<{
  src: string
  alt?: string
  fit?: 'cover' | 'contain'
}>()
</script>

<style scoped>
</style>
