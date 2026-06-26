<template>
  <header class="pt-2 h-lvh relative isolation overflow-hidden flex flex-col items-center justify-center">
    <Transition name="fade">
      <div
        v-if="showLoader"
        class="absolute inset-0 z-20 flex items-center justify-center text-vue font-mono"
      >
        <span class="animate-pulse text-lg tracking-widest uppercase">{{ $t('2026.initializing') }}</span>
      </div>
    </Transition>

    <Transition name="fade">
      <UiLetterGlitch
        v-show="showGlitch"
        :glitch-colors="['#fef08a', '#3aa173', '#42B883', '#3aa173', '#42B883', '#ffffff']"
        :glitch-speed="50"
        :smooth="true"
        :outer-vignette="true"
        :center-vignette="true"
        @ready="onGlitchReady"
      />
    </Transition>

    <!-- <ConferenceSponsorsHeader /> -->
    <Transition name="fade-slow">
      <div
        v-if="showContent"
        class="relative z-10 flex flex-col items-center"
      >
        <div class="font-bold mb-3">
          <h1 style="font-size: clamp(40px, 12.5vw, 80px)">
            <UiPragVue2026 :year="2026" />
          </h1>
        </div>
        <main class="text-center relative z-10">
          <div class="text-2xl mb-2">
            <span class="text-gray-200">{{ $t('2026.subtitle') }}</span>
          </div>
          <div class="text-3xl mb-6">
            <span class="text-yellow-400">{{ $t('2026.date') }}</span>
          </div>
          <UiMoreInfo anchor="introduction" />
        </main>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const showLoader = ref(true)
const showGlitch = ref(false)
const showContent = ref(false)

const onGlitchReady = () => {
  // 1. Hide the "Initializing" text and let it fade out first.
  showLoader.value = false

  // 2. Once the loader has faded out, reveal the glitch background.
  setTimeout(() => {
    showGlitch.value = true

    // 3. Then fade the actual content in on top of it, with a slight delay.
    setTimeout(() => {
      showContent.value = true
    }, 1000)
  }, 1000)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.0s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-slow-enter-active,
.fade-slow-leave-active {
  transition: opacity 1.0s ease;
}

.fade-slow-enter-from,
.fade-slow-leave-to {
  opacity: 0;
}
</style>
