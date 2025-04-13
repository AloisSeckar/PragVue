<template>
  <div
    :class="cn('flex flex-col gap-4 items-center justify-center py-6', className)"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineProps<{
  className?: string
  sizeY?: 'small' | 'medium'
}>()
</script>
