<template>
  <button
    class="bg-primary-dark w-10 h-10 flex-shrink-0 flex items-center justify-center text-text-main hover:bg-primary-dark transition-colors"
    type="button"
    :class="{
      'rounded-tr-lg rounded-br-lg ': direction === 'left',
      'rounded-tl-lg rounded-bl-lg': direction === 'right',
    }"
  >
    <svg
      width="13"
      height="16"
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
defineProps<{
  direction: 'left' | 'right'
}>()
</script>
