<template>
  <component :is="tag" class="text-xl text-center font-bold whitespace-nowrap text-woodsmoke-600 pgv-logo">
    <span>{{ '< ' }}</span>
    <UiPragVue />
    <span>{{ ' /> ' }}</span>
  </component>
</template>

<script lang="ts" setup>
defineProps<{
  tag?: 'div' | 'h1'
}>()
</script>
