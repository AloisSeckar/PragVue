<template>
  <div ref="terminalRef" class="terminal-box">
    <div v-for="(line, i) in lines" :key="i" class="terminal-line">
      <span class="terminal-placeholder">{{ line }}</span>
      <span class="terminal-visible">
        <span class="terminal-text">{{ displayedLines[i] }}</span>
        <span v-if="currentLine === i && !done" class="terminal-cursor">_</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  lines: string[]
  typingSpeed?: number
  lineDelay?: number
  start?: boolean
}>(), {
  typingSpeed: 40,
  lineDelay: 600,
  start: false,
})

const emit = defineEmits<{
  done: []
}>()

const terminalRef = ref<HTMLElement | null>(null)
const displayedLines = ref<string[]>(props.lines.map(() => ''))
const currentLine = ref(0)
const done = ref(false)
let started = false

function typeLine(lineIndex: number) {
  const text = props.lines[lineIndex]
  if (!text) {
    done.value = true
    return
  }

  let charIndex = 0
  const interval = setInterval(() => {
    charIndex++
    displayedLines.value[lineIndex] = text.slice(0, charIndex)
    if (charIndex >= text.length) {
      clearInterval(interval)
      if (lineIndex < props.lines.length - 1) {
        setTimeout(() => {
          currentLine.value = lineIndex + 1
          typeLine(lineIndex + 1)
        }, props.lineDelay)
      }
      else {
        done.value = true
        emit('done')
      }
    }
  }, props.typingSpeed + Math.random() * 30)
}

watch(() => props.start, (val) => {
  if (val && !started) {
    started = true
    typeLine(0)
  }
})
</script>

<style scoped>
.terminal-box {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: clamp(0.75rem, 2.5vw, 0.95rem);
  color: cyan;
  width: fit-content;
  max-width: 100%;
}

.terminal-line {
  position: relative;
  white-space: nowrap;
  line-height: 1.8;
}

.terminal-placeholder {
  visibility: hidden;
}

.terminal-visible {
  position: absolute;
  left: 0;
  top: 0;
}

.terminal-cursor {
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
