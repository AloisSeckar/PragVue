<template>
  <section>
    <component :is="tag">
      <slot />
    </component>
  </section>
</template>

<script lang="ts" setup>
const {
  tag = 'div',
} = defineProps<{
  tag?: 'div' | 'footer'
}>()
</script>
