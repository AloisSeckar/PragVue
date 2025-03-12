<template>
  <!--  eslint-disable-next-line  -->
  <component :is="tag" class="text-white font-default font-bold pgv-logo whitespace-nowrap">
    Prag<span class="text-vue">Vue</span><span class="text-vue-light">2025</span>
  </component>
</template>

<script lang="ts" setup>
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
}

.pgv-logo:after {
  content: ' />';
  @apply text-woodsmoke-600;
}
</style>
