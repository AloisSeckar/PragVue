<template>
  <button
    :class="{
      'hover:border-primary-light bg-primary-dark': variant === 'primary',
      'hover:border-neutral-600 bg-secondary-muted': variant === 'secondary',
      'text-sm rounded-lg font-semibold hover:bg-neutral-800 px-4 py-2 flex justify-between gap-2 transition-colors': true,
    }"
  >
    <IconNuxtIcon
      v-if="icon?.type === 'prefix'"
      :name="icon.name"
      :size="icon.size"
      aria-hidden="true"
    />

    <p class="grid place-content-center">
      <slot />
    </p>

    <IconNuxtIcon
      v-if="icon?.type === 'suffix'"
      :name="icon.name"
      :size="icon.size"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
import type { IconName, IconSize } from '../icon/NuxtIcon.vue'

type PrefixIcon = {
  type: 'prefix'
  name: IconName
  size?: IconSize
}

type SuffixIcon = {
  type: 'suffix'
  name: IconName
  size?: IconSize
}

type IconConfig = PrefixIcon | SuffixIcon

type Props = {
  icon?: IconConfig
  variant?: 'primary' | 'secondary'
}

const { variant = 'primary' } = defineProps<Props>()
</script>
