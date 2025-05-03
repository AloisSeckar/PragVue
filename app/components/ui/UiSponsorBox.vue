<template>
  <UiBox
    :title :to :background="noBackground ? 'none' : undefined"
    :size
    class="flex items-center justify-center"
  >
    <slot>
      <img
        class="inline-block object-contain w-auto h-10" :src="`/${image}.webp`" :alt
      >
    </slot>
  </UiBox>
</template>

<script setup lang="ts">
const {
  to,
  title,
  alt,
  image,
  noBackground,
  size,
} = defineProps<{
  to?: string
  title?: string
  alt?: string
  image?: string
  noBackground?: boolean
  size?: 'sm' | 'md' | 'lg'
}>()
</script>
