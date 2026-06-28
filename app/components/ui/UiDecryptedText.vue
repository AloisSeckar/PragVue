<template>
  <span ref="containerRef" class="dt-root inline-block whitespace-pre-wrap" :class="parentClassName" v-bind="animateListeners">
    <span class="sr-only">{{ text }}</span>

    <span aria-hidden="true">
      <template v-for="(token, ti) in tokens" :key="ti">
        <span v-if="token.type === 'word'" class="dt-word">
          <span v-for="cell in token.chars" :key="cell.i" class="dt-char">
            <span class="dt-ghost">{{ cell.real }}</span>
            <span
              class="dt-overlay"
              :class="isRevealedOrDone(cell.i) ? className : encryptedClassName"
            >{{ displayText[cell.i] }}</span>
          </span>
        </span>
        <span v-else class="dt-space">{{ token.text }}</span>
      </template>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

type RevealDirection = 'start' | 'end' | 'center'
type AnimateOn = 'view' | 'hover' | 'inViewHover' | 'click' | 'start'
type ClickMode = 'once' | 'toggle'
type Direction = 'forward' | 'reverse'

interface DecryptedTextProps {
  text: string
  speed?: number
  maxIterations?: number
  sequential?: boolean
  revealDirection?: RevealDirection
  useOriginalCharsOnly?: boolean
  characters?: string
  className?: string
  encryptedClassName?: string
  parentClassName?: string
  animateOn?: AnimateOn
  clickMode?: ClickMode
  start?: boolean
  scrambleIntensity?: number
}

const props = withDefaults(defineProps<DecryptedTextProps>(), {
  speed: 50,
  maxIterations: 10,
  sequential: false,
  revealDirection: 'start',
  useOriginalCharsOnly: false,
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className: '',
  encryptedClassName: '',
  parentClassName: '',
  animateOn: 'hover',
  clickMode: 'once',
  start: false,
  scrambleIntensity: 0.3,
})

const emit = defineEmits<{
  done: []
}>()

const containerRef = ref<HTMLSpanElement | null>(null)

const displayText = ref<string>(props.text)
const isAnimating = ref<boolean>(false)
const revealedIndices = ref<Set<number>>(new Set())
const hasAnimated = ref<boolean>(false)
const isDecrypted = ref<boolean>(props.animateOn !== 'click' && props.animateOn !== 'start')
const direction = ref<Direction>('forward')

const orderRef = ref<number[]>([])
const pointerRef = ref<number>(0)
let intervalId: ReturnType<typeof setInterval> | null = null

type Word = { type: 'word', chars: { i: number, real: string }[] }
type Space = { type: 'space', text: string }

const tokens = computed<(Word | Space)[]>(() => {
  const result: (Word | Space)[] = []
  let idx = 0
  for (const part of props.text.split(/(\s+)/)) {
    if (part === '') continue
    if (/^\s+$/.test(part)) {
      result.push({ type: 'space', text: part })
    }
    else {
      result.push({
        type: 'word',
        chars: part.split('').map((real, k) => ({ i: idx + k, real })),
      })
    }
    idx += part.length
  }
  return result
})

const availableChars = computed<string[]>(() => {
  return props.useOriginalCharsOnly
    ? Array.from(new Set(props.text.split(''))).filter(char => char !== ' ')
    : props.characters.split('')
})

function randomChar(): string {
  return availableChars.value[Math.floor(Math.random() * availableChars.value.length)] ?? ''
}

function shuffleText(originalText: string, currentRevealed: Set<number>): string {
  return originalText
    .split('')
    .map((char, i) => {
      if (char === ' ') return ' '
      if (currentRevealed.has(i)) return originalText[i]
      return randomChar()
    })
    .join('')
}

// Re-randomize only a portion of the still-encrypted characters, keeping the
// rest of the scramble stable so the effect feels calmer (matches the reveal pace).
function scrambleStep(currentRevealed: Set<number>): string {
  const original = props.text
  const prev = displayText.value

  const encrypted: number[] = []
  for (let i = 0; i < original.length; i++) {
    if (original[i] !== ' ' && !currentRevealed.has(i)) encrypted.push(i)
  }

  const intensity = Math.min(1, Math.max(0, props.scrambleIntensity))
  const count = encrypted.length === 0 ? 0 : Math.max(1, Math.round(encrypted.length * intensity))

  const toShuffle = new Set<number>()
  const pool = encrypted.slice()
  for (let k = 0; k < count && pool.length > 0; k++) {
    const j = Math.floor(Math.random() * pool.length)
    toShuffle.add(pool[j]!)
    pool.splice(j, 1)
  }

  return original
    .split('')
    .map((char, i) => {
      if (char === ' ') return ' '
      if (currentRevealed.has(i)) return char
      const previous = prev[i]
      if (previous === undefined || previous === char || toShuffle.has(i)) return randomChar()
      return previous
    })
    .join('')
}

function computeOrder(len: number): number[] {
  const order: number[] = []
  if (len <= 0) return order
  if (props.revealDirection === 'start') {
    for (let i = 0; i < len; i++) order.push(i)
    return order
  }
  if (props.revealDirection === 'end') {
    for (let i = len - 1; i >= 0; i--) order.push(i)
    return order
  }
  const middle = Math.floor(len / 2)
  let offset = 0
  while (order.length < len) {
    if (offset % 2 === 0) {
      const idx = middle + offset / 2
      if (idx >= 0 && idx < len) order.push(idx)
    }
    else {
      const idx = middle - Math.ceil(offset / 2)
      if (idx >= 0 && idx < len) order.push(idx)
    }
    offset++
  }
  return order.slice(0, len)
}

function fillAllIndices(): Set<number> {
  const s = new Set<number>()
  for (let i = 0; i < props.text.length; i++) s.add(i)
  return s
}

function removeRandomIndices(set: Set<number>, count: number): Set<number> {
  const arr = Array.from(set)
  for (let i = 0; i < count && arr.length > 0; i++) {
    const idx = Math.floor(Math.random() * arr.length)
    arr.splice(idx, 1)
  }
  return new Set(arr)
}

function encryptInstantly() {
  const emptySet = new Set<number>()
  revealedIndices.value = emptySet
  displayText.value = shuffleText(props.text, emptySet)
  isDecrypted.value = false
}

function triggerDecrypt() {
  if (props.sequential) {
    orderRef.value = computeOrder(props.text.length)
    pointerRef.value = 0
    revealedIndices.value = new Set()
  }
  else {
    revealedIndices.value = new Set()
  }
  direction.value = 'forward'
  isAnimating.value = true
}

function triggerReverse() {
  if (props.sequential) {
    orderRef.value = computeOrder(props.text.length).slice().reverse()
    pointerRef.value = 0
    const full = fillAllIndices()
    revealedIndices.value = full
    displayText.value = shuffleText(props.text, full)
  }
  else {
    const full = fillAllIndices()
    revealedIndices.value = full
    displayText.value = shuffleText(props.text, full)
  }
  direction.value = 'reverse'
  isAnimating.value = true
}

function getNextIndex(revealedSet: Set<number>): number {
  const textLength = props.text.length
  switch (props.revealDirection) {
    case 'start':
      return revealedSet.size
    case 'end':
      return textLength - 1 - revealedSet.size
    case 'center': {
      const middle = Math.floor(textLength / 2)
      const offset = Math.floor(revealedSet.size / 2)
      const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1
      if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
        return nextIndex
      }
      for (let i = 0; i < textLength; i++) {
        if (!revealedSet.has(i)) return i
      }
      return 0
    }
    default:
      return revealedSet.size
  }
}

function stopInterval() {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
}

function startInterval() {
  stopInterval()
  let currentIteration = 0

  intervalId = setInterval(() => {
    if (props.sequential) {
      if (direction.value === 'forward') {
        if (revealedIndices.value.size < props.text.length) {
          const nextIndex = getNextIndex(revealedIndices.value)
          const newRevealed = new Set(revealedIndices.value)
          newRevealed.add(nextIndex)
          revealedIndices.value = newRevealed
          displayText.value = scrambleStep(newRevealed)
        }
        else {
          stopInterval()
          isAnimating.value = false
          isDecrypted.value = true
          emit('done')
        }
      }
      else {
        if (pointerRef.value < orderRef.value.length) {
          const idxToRemove = orderRef.value[pointerRef.value++]
          const newRevealed = new Set(revealedIndices.value)
          newRevealed.delete(idxToRemove!)
          revealedIndices.value = newRevealed
          displayText.value = shuffleText(props.text, newRevealed)
          if (newRevealed.size === 0) {
            stopInterval()
            isAnimating.value = false
            isDecrypted.value = false
          }
        }
        else {
          stopInterval()
          isAnimating.value = false
          isDecrypted.value = false
        }
      }
    }
    else {
      if (direction.value === 'forward') {
        displayText.value = scrambleStep(revealedIndices.value)
        currentIteration++
        if (currentIteration >= props.maxIterations) {
          stopInterval()
          isAnimating.value = false
          displayText.value = props.text
          isDecrypted.value = true
          emit('done')
        }
      }
      else {
        let currentSet = revealedIndices.value
        if (currentSet.size === 0) currentSet = fillAllIndices()
        const removeCount = Math.max(1, Math.ceil(props.text.length / Math.max(1, props.maxIterations)))
        const nextSet = removeRandomIndices(currentSet, removeCount)
        revealedIndices.value = nextSet
        displayText.value = shuffleText(props.text, nextSet)
        currentIteration++
        if (nextSet.size === 0 || currentIteration >= props.maxIterations) {
          stopInterval()
          isAnimating.value = false
          isDecrypted.value = false
          displayText.value = shuffleText(props.text, new Set())
          revealedIndices.value = new Set()
        }
      }
    }
  }, props.speed)
}

watch(isAnimating, (val) => {
  if (val) startInterval()
  else stopInterval()
})

function handleClick() {
  if (props.animateOn !== 'click') return
  if (props.clickMode === 'once') {
    if (isDecrypted.value) return
    direction.value = 'forward'
    triggerDecrypt()
  }
  if (props.clickMode === 'toggle') {
    if (isDecrypted.value) {
      triggerReverse()
    }
    else {
      direction.value = 'forward'
      triggerDecrypt()
    }
  }
}

function triggerHoverDecrypt() {
  if (isAnimating.value) return
  revealedIndices.value = new Set()
  isDecrypted.value = false
  displayText.value = props.text
  direction.value = 'forward'
  isAnimating.value = true
}

function resetToPlainText() {
  stopInterval()
  isAnimating.value = false
  revealedIndices.value = new Set()
  displayText.value = props.text
  isDecrypted.value = true
  direction.value = 'forward'
}

const animateListeners = computed(() => {
  if (props.animateOn === 'hover' || props.animateOn === 'inViewHover') {
    return {
      onMouseenter: triggerHoverDecrypt,
      onMouseleave: resetToPlainText,
    }
  }
  if (props.animateOn === 'click') {
    return { onClick: handleClick }
  }
  return {}
})

function isRevealedOrDone(index: number): boolean {
  return revealedIndices.value.has(index) || (!isAnimating.value && isDecrypted.value)
}

function runOnce() {
  if (hasAnimated.value) return
  hasAnimated.value = true
  direction.value = 'forward'
  triggerDecrypt()
}

let intersectionObserver: IntersectionObserver | null = null

onMounted(() => {
  if (props.animateOn === 'view' || props.animateOn === 'inViewHover') {
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.value) {
            runOnce()
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.1 },
    )
    if (containerRef.value) intersectionObserver.observe(containerRef.value)
  }

  if (props.animateOn === 'click' || props.animateOn === 'start') {
    encryptInstantly()
    if (props.animateOn === 'start' && props.start) runOnce()
  }
  else {
    displayText.value = props.text
    isDecrypted.value = true
  }
  revealedIndices.value = new Set()
  direction.value = 'forward'
})

watch(() => props.start, (val) => {
  if (props.animateOn === 'start' && val) runOnce()
})

onUnmounted(() => {
  stopInterval()
  intersectionObserver?.disconnect()
})
</script>

<style scoped>
/* Each character reserves the width of its real glyph (ghost), while the
   scrambled glyph is overlaid on top. This keeps line wrapping identical to
   the final text and prevents layout shift while the text decrypts. */
.dt-word {
  display: inline-block;
  white-space: pre;
}

.dt-char {
  position: relative;
  display: inline-block;
}

.dt-ghost {
  visibility: hidden;
}

.dt-overlay {
  position: absolute;
  top: 0;
  left: 0;
  white-space: pre;
}
</style>
