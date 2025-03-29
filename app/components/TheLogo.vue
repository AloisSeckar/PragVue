<template>
  <!--  eslint-disable-next-line  -->
  <component :is="tag" class="font-default font-bold pt-12 px-4 sm:pt-0 whitespace-nowrap text-woodsmoke-600 before:content-['<_'] after:content-['_/>'] pgv-logo">
    <UiPragVue :year="2025" />
  </component>
</template>

<script lang="ts" setup>
import UiPragVue from './ui/UiPragVue.vue'

const {
  tag,
} = defineProps<{
  tag?: 'div' | 'h1'
}>()
</script>

<style scoped>
.pgv-logo {
    font-size: clamp(2rem, 10vw, 6rem);
}
</style>
