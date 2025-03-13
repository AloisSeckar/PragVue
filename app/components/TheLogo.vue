<template>
  <!--  eslint-disable-next-line  -->
  <component :is="tag" class="font-default font-bold pgv-logo whitespace-nowrap">
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

.pgv-logo:before {
  content: '<';
  @apply text-woodsmoke-600;
  @apply pr-4;
}

.pgv-logo:after {
  content: '/>';
  @apply text-woodsmoke-600;
  @apply p-4;
}
</style>
