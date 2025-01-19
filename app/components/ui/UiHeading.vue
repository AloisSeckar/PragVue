<template>
  <component :is="tag" class="pgv-heading">
    <slot />
  </component>
</template>

<script lang="ts" setup>
const {
  tag = 'h2',
} = defineProps<{
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>()
</script>

<style scoped>
.pgv-heading {
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.01em;
  line-height: 1.2;
  font-size: 2.5rem;
  font-weight: 700;

  &::before {
    content: '// ';
    @apply text-woodsmoke-800;
  }
}
</style>
