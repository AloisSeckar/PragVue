<template>
  <div
    class="pgv-cc"
    :class="{
      'pgv-cc--s-sm': sizeY === 'small',
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const {
  sizeY = 'medium',
} = defineProps<{
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
    padding: 2rem 4px;
  }
}

.pgv-cc--s-sm {
  padding-block: 2.5rem;
}
</style>
