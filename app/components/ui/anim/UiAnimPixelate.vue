<template>
  <div ref="rootRef" class="pgv-pixelate">
    <div
      class="pgv-pixelate__content"
      :class="{ 'is-shown': contentShown }"
      :style="contentStyle"
    >
      <slot />
    </div>

    <div
      v-if="effectiveMode === 'cover' && !revealed"
      class="pgv-pixelate__overlay"
      :class="{ 'is-running': running }"
      aria-hidden="true"
      :style="gridStyle"
    >
      <span
        v-for="tile in tiles"
        :key="tile.id"
        class="pgv-pixelate__tile"
        :style="{
          backgroundColor: color,
          left: `${tile.x}px`,
          top: `${tile.y}px`,
          width: `${cell + 1}px`,
          height: `${cell + 1}px`,
          animationDelay: `${tile.delay}ms`,
          animationDuration: `${duration}ms`,
        }"
      />
    </div>

    <svg
      v-if="effectiveMode === 'reveal' && !revealed"
      class="pgv-pixelate__defs"
      width="0"
      height="0"
      aria-hidden="true"
    >
      <defs>
        <mask :id="maskId">
          <rect
            v-for="tile in tiles"
            :key="tile.id"
            :x="tile.x"
            :y="tile.y"
            :width="cell + 1"
            :height="cell + 1"
            fill="#fff"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;1"
              :dur="`${duration}ms`"
              begin="indefinite"
              fill="freeze"
            />
          </rect>
        </mask>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
const {
  cell = 14,
  duration = 320,
  reveal = 1600,
  color = '#0b0f14',
  radius = 0,
  mode = 'cover',
  start = true,
} = defineProps<{
  /** Tile size in px. Smaller = finer pixels. */
  cell?: number
  /** Fade duration of a single tile in ms. */
  duration?: number
  /** Window over which all tiles are staggered in ms. */
  reveal?: number
  /** Overlay/tile color (should match the background behind the object). */
  color?: string
  /** Border radius of the overlay (number = px). Clips tiles to a rounded shape. */
  radius?: number | string
  /**
   * 'cover': opaque tiles fade out (needs `color` to match the backdrop).
   * 'reveal': mask the content in (works over any background; falls back to
   * 'cover' on browsers that can't animate an SVG mask on HTML, e.g. Safari).
   */
  mode?: 'cover' | 'reveal'
  /** Set to true to play the animation. */
  start?: boolean
}>()

const emit = defineEmits<{ done: [] }>()

const maskId = `pgv-pixelate-${useId()}`

const rootRef = ref<HTMLElement | null>(null)
const cols = ref(0)
const rows = ref(0)
const running = ref(false)
const revealed = ref(false)
const canMask = ref(false)

const effectiveMode = computed(() =>
  mode === 'reveal' && canMask.value ? 'reveal' : 'cover',
)

const contentShown = computed(() => running.value || revealed.value)

const contentStyle = computed(() => {
  if (effectiveMode.value === 'reveal' && running.value && !revealed.value) {
    return { mask: `url(#${maskId})`, WebkitMask: `url(#${maskId})` }
  }
  return {}
})

const tiles = computed(() => {
  const colCount = cols.value
  const count = colCount * rows.value
  const list: { id: number, delay: number, x: number, y: number }[] = []
  for (let i = 0; i < count; i++) {
    const col = i % colCount
    const row = Math.floor(i / colCount)
    list.push({
      id: i,
      delay: Math.random() * Math.max(0, reveal - duration),
      x: col * cell,
      y: row * cell,
    })
  }
  return list
})

const gridStyle = computed(() => ({
  borderRadius: typeof radius === 'number' ? `${radius}px` : radius,
  overflow: 'hidden',
}))

/**
 * Safari can't reliably animate an SVG <mask> applied to HTML content, so we
 * only enable reveal mode where it actually works.
 */
function supportsAnimatedSvgMask() {
  if (typeof window === 'undefined' || !window.CSS || !CSS.supports)
    return false
  const masks = CSS.supports('mask', 'url(#m)') || CSS.supports('-webkit-mask', 'url(#m)')
  const ua = navigator.userAgent
  const isSafari = /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(ua)
  return masks && !isSafari
}

function measure() {
  const el = rootRef.value
  if (!el)
    return
  const { width, height } = el.getBoundingClientRect()
  cols.value = Math.max(1, Math.ceil(width / cell))
  rows.value = Math.max(1, Math.ceil(height / cell))
}

/**
 * Kick off the SMIL animations imperatively so the per-tile stagger is anchored
 * to "now" instead of the document timeline (which may already be past the
 * delay values by the time the animation is triggered). CSS-animated SVG masks
 * are not repainted live by Chrome, so SMIL is required here.
 */
function startReveal() {
  const root = rootRef.value
  if (!root)
    return
  const anims = root.querySelectorAll<SVGAnimateElement>('.pgv-pixelate__defs animate')
  const list = tiles.value
  anims.forEach((anim, i) => {
    const delay = list[i]?.delay ?? 0
    anim.beginElementAt(delay / 1000)
  })
}

function run() {
  if (running.value || revealed.value)
    return
  measure()

  const prefersReduced = typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    running.value = true
    revealed.value = true
    emit('done')
    return
  }

  running.value = true

  if (effectiveMode.value === 'reveal') {
    nextTick(startReveal)
  }

  setTimeout(() => {
    revealed.value = true
    emit('done')
  }, reveal + duration)
}

let observer: ResizeObserver | null = null

onMounted(() => {
  canMask.value = supportsAnimatedSvgMask()
  measure()
  observer = new ResizeObserver(() => {
    if (!running.value)
      measure()
  })
  if (rootRef.value)
    observer.observe(rootRef.value)

  if (start)
    run()
})

watch(() => start, (val) => {
  if (val)
    run()
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.pgv-pixelate {
  position: relative;
}

.pgv-pixelate__content {
  visibility: hidden;
}

.pgv-pixelate__content.is-shown {
  visibility: visible;
}

.pgv-pixelate__overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.pgv-pixelate__tile {
  position: absolute;
  opacity: 1;
}

.pgv-pixelate__overlay.is-running .pgv-pixelate__tile {
  animation-name: pgv-pixelate-out;
  animation-timing-function: steps(1, end);
  animation-fill-mode: forwards;
}

.pgv-pixelate__defs {
  position: absolute;
  width: 0;
  height: 0;
}

@keyframes pgv-pixelate-out {
  to {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pgv-pixelate__overlay {
    display: none;
  }

  .pgv-pixelate__content {
    visibility: visible;
  }
}
</style>
