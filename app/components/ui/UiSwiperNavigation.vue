<template>
  <button
    class="bg-primary-dark w-10 h-10 flex-shrink-0 flex items-center justify-center text-text-main hover:bg-primary-dark transition-colors"
    type="button"
    :class="{
      'rounded-tr-lg rounded-br-lg ': direction === 'left',
      'rounded-tl-lg rounded-bl-lg': direction === 'right',
    }"
  >
    <IconNuxtIcon
      :name="direction === 'left' ? 'arrow-left' : 'arrow-left'"
      size="md"
      :class="{
        'rotate-180': direction === 'right',
      }"
    />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  direction: 'left' | 'right'
}>()
</script>
