<template>
  <div class="pgv-technologies">
    <UiIconBox
      v-for="(icon, index) in icons"
      :key="index"
      :class="{
        'max-sm:hidden': !MOBILE_VISIBLE_INDEXES.includes(index),
      }"
      :active="index === activeIndex"
      :icon="icon"
    />
  </div>
</template>

<script setup lang="ts">
const GRID_SIZE = 5

const CENTER = Math.floor(GRID_SIZE / 2)

/**
 * Map 2D coordinates to 1D array index
 *
 * Both x and y are 0-based
 */
function coordsToIndex(x: number, y: number) {
  return y * GRID_SIZE + x
}

// show 3x3 grid around the center on mobile
const MOBILE_VISIBLE_INDEXES = [
  coordsToIndex(CENTER - 1, CENTER - 1),
  coordsToIndex(CENTER, CENTER - 1),
  coordsToIndex(CENTER + 1, CENTER - 1),
  coordsToIndex(CENTER - 1, CENTER),
  coordsToIndex(CENTER, CENTER),
  coordsToIndex(CENTER + 1, CENTER),
  coordsToIndex(CENTER - 1, CENTER + 1),
  coordsToIndex(CENTER, CENTER + 1),
  coordsToIndex(CENTER + 1, CENTER + 1),
]

const icons = computed(() => {
  const icons: VueIcon[] = [
    'vue',
    'nuxt',
    'vite',
    'nitro',
    'vueuse',
    'tresjs',
    'pinia',
    'vitest',
    'oxc',
    'tailwind',
    'unjs',
    'h3',
    'nitro',
    'supabase',
    'rollup',
    'nuxt-ignis',
    'unjs',
    'vueform',
    'formkit',
    // TODO: add more unique icons
    'h3',
    'nitro',
    'supabase',
    'rollup',
    'nuxt-ignis',
  ]

  const gridLength = GRID_SIZE * GRID_SIZE
  const grid = Array<VueIcon | null>(gridLength).fill(null)

  let x = CENTER
  let y = CENTER

  const directions = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
  ]

  let iconIndex = 0
  let stepCount = 1
  let directionIndex = 0

  while (iconIndex < icons.length && iconIndex < gridLength) {
    for (let step = 0; step < stepCount; step++) {
      const icon = icons[iconIndex]!
      grid[y * GRID_SIZE + x] = icon
      iconIndex++
      if (iconIndex >= icons.length || iconIndex >= gridLength) {
        break
      }

      const [dx, dy] = directions[directionIndex]!
      x += dx!
      y += dy!
    }

    directionIndex = (directionIndex + 1) % 4

    if (directionIndex === 0 || directionIndex === 2) {
      stepCount++
    }
  }

  return grid
})

const activeIndex = ref<number | null>(null)
let interval: NodeJS.Timeout | null = null

onMounted(() => {
  interval = setInterval(() => {
    // if window is smaller than 640px, only take into account the middle 3x3 grid
    if (window.innerWidth < 640) {
      activeIndex.value = MOBILE_VISIBLE_INDEXES[Math.floor(Math.random() * MOBILE_VISIBLE_INDEXES.length)]!
      return
    }

    activeIndex.value = Math.floor(Math.random() * icons.value.length)
  }, 1500)
})

onUnmounted(() => {
  if (interval !== null) {
    clearInterval(interval)
  }
})
</script>

<style scoped>
.pgv-technologies {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;

  transform: rotate3d(4, -2.5, 3, 65deg);

  mask-image: radial-gradient(white 10%, rgba(255, 255, 255, 0.20) 45%, transparent 80%);

  @media screen and (width < 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}
</style>
