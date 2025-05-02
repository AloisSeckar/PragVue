<template>
  <NuxtLink
    :class="{
      'border-primary hover:border-primary-light bg-primary-dark':
        variant === 'primary',
      'border-neutral-700 hover:border-neutral-600 bg-secondary-muted':
        variant === 'secondary',
      'bg-none': variant === 'ghost',
      'justify-between': $slots.prefix || $slots.suffix,
      'min-w-[170px] max-w-[250px] text-sm sm:text-base rounded-lg font-semibold hover:bg-neutral-800 px-4 py-2 flex justify-center items-center gap-2 transition-colors': true,
    }"
    :to="to"
  >
    <slot v-if="$slots.prefix" name="prefix"></slot>
    <slot />
    <slot v-if="$slots.suffix" name="suffix"></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
type Props = {
  to: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

const { variant = 'primary', to } = defineProps<Props>()
</script>
