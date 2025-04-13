<template>
  <button
    :class="{
      'hover:border-primary-light bg-primary-dark': variant === 'primary',
      'hover:border-neutral-600 bg-secondary-muted': variant === 'secondary',
      'text-sm rounded-lg font-semibold hover:bg-neutral-800 px-4 py-2 flex justify-between gap-2 transition-colors': true,
    }"
  >
    <span v-if="prefixIcon" aria-hidden="true">
      {{ prefixIcon }}
    </span>

    <slot />

    <span v-if="suffixIcon" aria-hidden="true">
      {{ suffixIcon }}
    </span>
  </button>
</template>

<script setup lang="ts">
type Props = {
  prefixIcon?: string
  suffixIcon?: string
  variant?: 'primary' | 'secondary'
}

const { variant = 'primary' } = defineProps<Props>()
</script>
