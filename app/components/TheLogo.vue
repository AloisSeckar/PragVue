<template>
  <!--  eslint-disable-next-line  -->
  <component :is="tag" class="font-default font-bold pt-12 sm:pt-0 pgv-logo whitespace-nowrap">
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
  @apply pl-1;
  @apply pr-4;
}

.pgv-logo:after {
  content: '/>';
  @apply text-woodsmoke-600;
  @apply pl-4;
  @apply pr-1;
}
</style>
