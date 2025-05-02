<template>
  <div aria-hidden="true" :class="resolvedClasses">
    <component
      :is="resolvedComponent"
      :name="'custom:' + name"
      mode="svg"
      class="icon"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from '#imports'

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
type IconSize = 'sm' | 'md' | 'lg'
type Breakpoint = 'base' | 'xs' | 'sm' | 'md' | 'lg'
export type IconSizeMap = {
  [key in Breakpoint]?: IconSize
}

type Props = {
  size: IconSizeMap
  name: IconName
}

const { size, name } = defineProps<Props>()
const resolvedComponent = ref('Icon')

const resolvedClasses = computed(() => {
  const classes = ['icon-wrapper']

  if (size.base) {
    classes.push(`size-base-${size.base}`)
  }

  if (size.xs) {
    classes.push(`size-xs-${size.xs}`)
  }

  if (size.sm) {
    classes.push(`size-sm-${size.sm}`)
  }

  if (size.md) {
    classes.push(`size-md-${size.md}`)
  }

  if (size.lg) {
    classes.push(`size-lg-${size.lg}`)
  }

  return classes.join(' ')
})
</script>

<style scoped>
.icon-wrapper {
  display: block;
}

.icon {
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
}

.size-base-sm {
  width: 1.5rem;
  height: 1.5rem;
}

.size-base-md {
  width: 2rem;
  height: 2rem;
}

.size-base-lg {
  width: 2.5rem;
  height: 2.5rem;
}

@media (min-width: 480px) {
  .size-xs-sm {
    width: 1.5rem;
    height: 1.5rem;
  }

  .size-xs-md {
    width: 2rem;
    height: 2rem;
  }

  .size-xs-lg {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (min-width: 640px) {
  .size-sm-sm {
    width: 1.5rem;
    height: 1.5rem;
  }

  .size-sm-md {
    width: 2rem;
    height: 2rem;
  }

  .size-sm-lg {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (min-width: 768px) {
  .size-md-sm {
    width: 1.5rem;
    height: 1.5rem;
  }

  .size-md-md {
    width: 2rem;
    height: 2rem;
  }

  .size-md-lg {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .size-lg-sm {
    width: 1.5rem;
    height: 1.5rem;
  }

  .size-lg-md {
    width: 2rem;
    height: 2rem;
  }

  .size-lg-lg {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
