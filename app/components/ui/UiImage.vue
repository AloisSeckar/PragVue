<template>
  <div class="relative">
    <NuxtLink :to="github">
      <NuxtImg
        class="absolute inset-0 w-full h-full rounded-full"
        :class="{
          'object-cover': fit === 'cover',
          'object-contain': fit === 'contain',
        }"
        :src="src"
        :title="name"
        :alt="$t('accessibility.photo_of_speaker_name', { name })"
        loading="lazy"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const {
  src,
  name,
  fit = 'cover',
} = defineProps<{
  src: string
  name: string
  fit?: 'cover' | 'contain'
}>()

const github = src.slice(0, -4)
</script>
