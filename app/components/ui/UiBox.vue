<template>
  <component
    :is="to ? NuxtLink : 'div'"
    :to
    :class="{
      'p-4': size === 'sm',
      'py-2': size === 'sm' && inline,
      'p-6': size === 'md',
      'py-4': size === 'md' && inline,
      'p-8': size === 'lg',
      'py-6': size === 'lg' && inline,
      'bg-woodsmoke-800': background === 'normal',
      'after:content-[\'\'] after:absolute after:inset-0 after:bg-woodsmoke-800': background === 'pseudo',
    }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from '#app'
import { NuxtLink } from '#components'

const {
  background = 'normal',
  to,
  size = 'md',
  inline,
} = defineProps<{
  background?: 'normal' | 'pseudo' | 'none'
  to?: NuxtLinkProps['to']
  size?: 'sm' | 'md' | 'lg'
  inline?: boolean
}>()
</script>
