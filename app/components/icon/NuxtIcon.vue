<template>
  <div
    aria-hidden="true"
    :class="{
      'w-6 h-6': size === 'sm',
      'w-8 h-8': size === 'md',
      'w-10 h-10': size === 'lg',
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
 * After adding new icon remember to remove width and height from the svg.
 * And remember to add the icon to the list of icons below.
 */
export type IconName =
  | 'map'
  | 'ticket'
  | 'calendar-plus'
  | 'arrow-left'
  | 'mail'
export type IconSize = 'sm' | 'md' | 'lg'

type Props = {
  size?: IconSize
  name: IconName
}

const { size = 'md', name } = defineProps<Props>()
const resolvedComponent: Ref<null | string> = ref('Icon')
</script>
