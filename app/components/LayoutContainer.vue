<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script lang="ts" setup>
const { tag = 'div' } = defineProps<{
  tag?: 'div' | 'footer'
}>()
</script>
