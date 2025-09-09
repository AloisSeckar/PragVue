<template>
  <UiBox
    :title :to :background="noBackground ? 'none' : undefined"
    :size
    class="flex items-center justify-center"
  >
    <slot>
      <img
        class="inline-block object-contain w-auto" :class="h" :src="`/${image}.webp`" :alt
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

let h: string
switch (size) {
  case 'sm':
    h = 'h-8'
    break
  case 'md':
    h = 'h-10'
    break
  default:
    h = 'h-12'
}
</script>
