<template>
  <component
    :is="tag"
    :class="{
      'flex items-center justify-center font-default font-bold whitespace-nowrap text-woodsmoke-600': true,
      'text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl': tag === 'h1',
      'text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl': tag === 'div',
    }"
  >
    <span>&lt;&nbsp;</span>
    <span class="text-white">Prag</span>
    <span class="text-primary">Vue</span>
    <span class="text-primary-light">{{ year }}</span>
    <span>&nbsp;/&gt;</span>
  </component>
</template>

<script lang="ts" setup>
  type Props = {
    tag: 'div' | 'h1'
  }

const year = useState(() => new Date().getFullYear())

defineProps<Props>()
</script>
