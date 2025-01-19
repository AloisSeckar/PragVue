<template>
  <button class="bg-vue w-10 h-10 flex-shrink-0 flex items-center justify-center text-white hover:bg-vue-dark transition-colors" type="button">
    <svg
      width="13" height="16"
      xmlns="http://www.w3.org/2000/svg"
      :class="{
        'transform rotate-180 mr-1': direction === 'left',
        '-mr-1': direction === 'right',
      }"
    >
      <path d="M0 16V0l12 8-12 8Z" fill="currentColor" />
    </svg>
  </button>
</template>

<script setup lang="ts">
const {
  direction,
} = defineProps<{
  direction: 'left' | 'right'
}>()
</script>

<style scoped>

</style>
