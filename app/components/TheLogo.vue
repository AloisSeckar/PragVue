<template>
  <component
    :is="tag"
    :class="
      cn(
        'font-bold whitespace-nowrap text-woodsmoke-600',
        {
          'flex items-center justify-center': tag === 'p' || tag === 'h1',
          'inline-block': tag === 'div',
          'text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl':
            tag === 'h1',
          'text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl':
            tag === 'p',
        },
        className,
      )
    "
  >
    <span aria-hidden="true">&lt;&nbsp;</span>
    <span class="text-white">Prag</span>
    <span class="text-primary">Vue</span>
    <span class="text-primary-light">{{ currentYear }}</span>
    <span aria-hidden="true">&nbsp;/&gt;</span>
  </component>
</template>

<script lang="ts" setup>
import type { ClassValue } from 'clsx'
import { cn } from '~/lib/utils'

type Props = {
  class?: ClassValue
  tag: 'p' | 'h1' | 'div'
  year?: number
}

const { class: className, year = undefined } = defineProps<Props>()

const yearState = useState('currentYear', () => new Date().getFullYear())
const currentYear = computed(() => year ?? yearState.value)
</script>
