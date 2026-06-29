<template>
  <component :is="section ? 'section' : 'div'" class="pgv-cc" :class="{ 'pgv-cc--s-sm': sizeY === 'small' }">
    <slot />
  </component>
</template>

<script lang="ts" setup>
const {
  section = true,
  sizeY = 'medium',
} = defineProps<{
  section?: boolean
  sizeY?: 'small' | 'medium'
}>()
</script>

<style scoped>
.pgv-cc {
    max-width: 1440px;
    padding: 4rem 2rem;
    margin: 0 auto;

  @media screen and (width >= 1536px) {
    padding-inline: 5rem;
  }

  @media screen and (width < 600px) {
    padding: 2rem 10px;
  }
}

.pgv-cc--s-sm {
  padding-block: 2.5rem;
}
</style>
