<template>
  <UiBox
    :title :to :background="noBackground ? 'none' : undefined"
    :size
    class="flex items-center justify-center"
    :aria-label="title || 'Sponsor'"
  >
    <slot>
      <img
        class="inline-block object-contain w-auto h-8"
        :src="`/${image}.webp`"
        :alt="alt || title || 'Sponsor logo'"
      >
    </slot>
    <p class="sr-only">
      {{ title }}
    </p>
  </UiBox>
</template>

<script setup lang="ts">
defineProps<{
  to?: string
  title?: string
  alt?: string
  image?: string
  noBackground?: boolean
  size?: 'sm' | 'md' | 'lg'
}>()
</script>
