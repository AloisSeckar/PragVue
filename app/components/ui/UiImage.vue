<template>
  <div class="relative overflow-hidden">
    <!-- TODO NuxtImg not work properly on Netlify -->
    <img
      class="w-full h-full"
      :class="{
        'object-cover': fit === 'cover',
        'object-contain': fit === 'contain',
      }"
      :src="src"
      :title="title"
      :alt="alt"
      loading="lazy"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  title: string
  alt: string
  fit?: 'cover' | 'contain' | 'rounded'
}>()
</script>
