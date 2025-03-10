<template>
  <UiButton v-bind="props">
    <slot />
    <template #trailing>
      <span class="max-sm:text-3xl max-sm:ml-2">
        {{ icon }}
      </span>
    </template>
  </UiButton>
</template>

<script setup lang="ts">
import type { UiButtonProps } from './UiButton.vue'

const {
  icon,
  ...props
} = defineProps<{
  icon: string
} & UiButtonProps>()
</script>

<style scoped>

</style>
