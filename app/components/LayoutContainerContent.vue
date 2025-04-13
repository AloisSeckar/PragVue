<template>
  <div
    :class="cn(
      { 'flex flex-col gap-4 items-center justify-center py-6': true },
      className,
    )"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { ClassValue } from 'clsx'
import { cn } from '~/lib/utils'

  type Props = {
    class?: ClassValue
  }

const { class: className } = defineProps<Props>()
</script>
