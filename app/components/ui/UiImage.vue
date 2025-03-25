<template>
  <div class="relative">
    <!-- TODO NuxtImg not work properly on Netlify -->
    <img
      class="absolute inset-0 w-full h-full"
      :class="{
        'object-cover': fit === 'cover',
        'object-contain': fit === 'contain',
        'rounded-full': fit === 'rounded',
      }"
      :src="src"
      :title="title"
      :alt="alt"
      loading="lazy"
    >
  </div>
</template>

<script setup lang="ts">
const {
  src,
  title,
  alt,
  fit = 'cover',
} = defineProps<{
  src: string
  title: string
  alt: string
  fit?: 'cover' | 'contain' | 'rounded'
}>()
</script>
