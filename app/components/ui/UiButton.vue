<template>
  <button
    :class="{
      'hover:border-primary-light bg-primary-dark': variant === 'primary',
      'hover:border-neutral-600 bg-secondary-muted': variant === 'secondary',
      'max-w-[180px] text-sm rounded-lg font-semibold hover:bg-neutral-800 px-4 py-2 flex justify-between items-center gap-2 transition-colors': true,
    }"
  >
    <slot v-if="$slots.prefix" name="prefix"></slot>
    <slot />
    <slot v-if="$slots.suffix" name="suffix"></slot>
  </button>
</template>

<script setup lang="ts">
type Props = {
  variant?: 'primary' | 'secondary'
}

const { variant = 'primary' } = defineProps<Props>()
</script>
