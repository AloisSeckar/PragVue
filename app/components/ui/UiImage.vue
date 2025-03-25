<template>
  <div class="relative">
    <NuxtLink :to="github">
      <NuxtImg
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
      />
    </NuxtLink>
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

const github = src.slice(0, -4)
</script>
