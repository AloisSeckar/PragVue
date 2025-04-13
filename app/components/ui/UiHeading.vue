<template>
  <component
    :is="tag"
    class="font-bold flex gap-2 pb-6 w-full"
    :class="{
      'text-4xl': tag === 'h1',
      'text-2xl': tag === 'h2',
      'text-xl': tag === 'h3',
    }"
  >
    <span class="text-primary-dark" aria-hidden="true">//</span>
    <slot />
  </component>
</template>

<script lang="ts" setup>
type Props = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

withDefaults(defineProps<Props>(), {
  tag: 'h2',
})
</script>
