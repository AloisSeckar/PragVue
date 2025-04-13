<template>
  <component
    :is="link ? 'NuxtLink' : 'button'" :to="link" :type="link ? undefined : 'button'"

    :class="{
      'border-vue hover:border-vue-light bg-vue-dark': variant === 'primary',
      'border-woodsmoke-700 hover:border-woodsmoke-600 bg-secondary-muted ': variant === 'secondary',
      'text-sm rounded-lg w-full font-semibold hover:bg-woodsmoke-800 px-4 py-2 flex justify-between gap-2 transition-colors': true,
    }"
  >
    <span v-if="prefixIcon" aria-hidden="true">
      {{ prefixIcon }}
    </span>

    {{ label }}

    <span v-if="suffixIcon" aria-hidden="true">
      {{ suffixIcon }}
    </span>
  </component>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface UiButtonProps {
  to?: RouteLocationRaw
  href?: string
  label?: string
  prefixIcon?: string
  suffixIcon?: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<UiButtonProps>(), {
  variant: 'primary',
})

const link = computed(() => props.to || props.href || null)
</script>
