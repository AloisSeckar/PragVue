<template>
  <div class="pt-2 h-lvh relative isolation overflow-hidden flex flex-col items-center justify-start">
    <UiLetterGlitch
      :glitch-colors="['#2b4539', '#61dca3', '#61b3dc']"
      :glitch-speed="50"
      :smooth="true"
      :outer-vignette="true"
      :center-vignette="false"
      height="80px"
    />
    <a id="introduction" />
    <div class="flex-1 flex flex-col items-center justify-center">
      <h2 ref="headingRef" class="pgv-heading">
        <span class="pgv-heading-word" :class="{ 'is-visible': visibleItems >= 1 }">
          <span class="text-white">{{ $t('introduction.claim1') }}</span>
        </span>
        <span class="pgv-heading-word mx-4" :class="{ 'is-visible': visibleItems >= 2 }">
          <span class="text-vue">{{ $t('introduction.claim2') }}</span>
        </span>
        <span class="pgv-heading-word" :class="{ 'is-visible': visibleItems >= 3 }">
          <span class="text-vue-light">{{ $t('introduction.claim3') }}</span>
        </span>
      </h2>

      <ConferenceTerminal
        :lines="[
          'Event: PragVue 2026',
          'Place: Arthur\'s Pub, Karlín district, Prague, Czechia',
          'Date: September 29, 2026, 09:00 GMT+1',
        ]"
        :start="headingDone"
        class="mx-2 my-8 transition-opacity duration-700"
        :class="headingDone ? 'opacity-100' : 'opacity-0'"
        @done="terminalDone = true"
      />

      <p class="tracking-[0.01em] max-w-150 text-lg mx-2 mb-12 text-left sm:text-justify pgv-materialize" :class="{ 'is-visible': terminalDone }">
        {{ $t('introduction.about') }}
      </p>

      <div class="pgv-heading-word" :class="{ 'is-visible': aboutDone }">
        <UiMoreInfo :button-label="'introduction.more'" :socials-show="false" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const headingRef = ref<HTMLElement | null>(null)
const visibleItems = ref(0)
const headingDone = ref(false)
const terminalDone = ref(false)
const aboutDone = ref(false)

watch(terminalDone, (val) => {
  if (val) {
    setTimeout(() => {
      aboutDone.value = true
    }, 1200)
  }
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0] && entries[0].isIntersecting) {
        revealWords()
        observer.disconnect()
      }
    },
    { threshold: 0.5 },
  )

  if (headingRef.value) {
    observer.observe(headingRef.value)
  }
})

function revealWords() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      visibleItems.value = i
      if (i === 3) {
        setTimeout(() => {
          headingDone.value = true
        }, 700)
      }
    }, i * 500)
  }
}
</script>

<style scoped>
.pgv-heading {
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.01em;
  line-height: 1.2;
  font-size: clamp(1.25rem, 6.25vw, 2.5rem);
  font-weight: 700;
  white-space: nowrap;
}

.pgv-heading-word {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
}

.pgv-heading-word > span,
.pgv-heading-word > div {
  display: inline-block;
  transform: translateY(100%);
  opacity: 0;
}

.pgv-heading-word.is-visible > span,
.pgv-heading-word.is-visible > div {
  animation: bounce-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes bounce-in {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-12%);
    opacity: 1;
  }
  70% {
    transform: translateY(6%);
  }
  85% {
    transform: translateY(-3%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.pgv-materialize {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(8px);
  transition: opacity 1.2s ease, filter 1.2s ease, transform 1.2s ease;
}

.pgv-materialize.is-visible {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}
</style>
