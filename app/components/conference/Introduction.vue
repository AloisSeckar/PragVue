<template>
  <div class="pt-2 px-2 h-lvh relative isolation overflow-hidden flex flex-col items-center justify-start">
    <UiAnimLetterGlitch
      :glitch-colors="['#fef08a', '#3aa173', '#42B883', '#3aa173', '#42B883', '#ffffff']"
      :glitch-speed="50"
      :smooth="true"
      :outer-vignette="true"
      :center-vignette="false"
      height="80px"
    />
    <a id="introduction" />
    <div class="flex-1 flex flex-col items-center justify-center w-full min-w-0">
      <h2 ref="headingRef" class="pgv-heading">
        <span class="pgv-heading-word" :class="{ 'is-visible': visibleHeadings >= 1 }">
          <span class="text-white">{{ $t('introduction.claim1') }}</span>
        </span>
        <span class="pgv-heading-word mx-4" :class="{ 'is-visible': visibleHeadings >= 2 }">
          <span class="text-vue">{{ $t('introduction.claim2') }}</span>
        </span>
        <span class="pgv-heading-word" :class="{ 'is-visible': visibleHeadings >= 3 }">
          <span class="text-vue-light">{{ $t('introduction.claim3') }}</span>
        </span>
      </h2>

      <UiAnimTerminal
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

      <p
        class="tracking-[0.01em] max-w-150 text-lg px-2 mb-12 text-left  transition-opacity duration-700"
        :class="terminalDone ? 'opacity-100' : 'opacity-0'"
      >
        <UiAnimDecryptedText
          :text="$t('introduction.about')"
          :start="terminalDone"
          animate-on="start"
          :speed="40"
          :sequential="true"
          :use-original-chars-only="false"
          parent-class-name="text-white"
          class-name="text-white"
          encrypted-class-name="text-vue-light/70"
        />
      </p>

      <UiAnimPixelate :start="headingDone" :cell="10" :reveal="1000" color="#0b0f14">
        <UiMoreInfo :button-label="'introduction.more'" :socials-show="false" />
      </UiAnimPixelate>
    </div>
  </div>
</template>

<script setup lang="ts">
const headingRef = ref<HTMLElement | null>(null)
const visibleHeadings = ref(0)
const headingDone = ref(false)
const terminalDone = ref(false)

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
      visibleHeadings.value = i
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
</style>
