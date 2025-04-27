<template>
  <div
    :class="{
      'w-6 h-6': size === 'sm',
      'w-10 h-10': size === 'md',
      'w-12 h-12': size === 'lg',
    }"
  >
    <component
      :is="resolvedComponent"
      :name="'custom:' + name"
      mode="svg"
      class="block w-full h-full aspect-square"
    />
  </div>
</template>

<script setup lang="ts">
/*
 * To be consistent the collection is lucide icons
 * https://icones.js.org/collection/lucide
 */
export type IconName = 'map'
export type IconSize = 'sm' | 'md' | 'lg'

type Props = {
  size?: IconSize
  name: IconName
}

const { size = 'md', name } = defineProps<Props>()
const resolvedComponent: Ref<null | string> = ref('Icon')
</script>
