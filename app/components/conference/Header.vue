<template>
  <header class="pt-2 h-lvh relative isolation overflow-hidden flex flex-col items-center justify-center">
    <UiLetterGlitch
      :glitch-colors="['#2b4539', '#61dca3', '#61b3dc']"
      :glitch-speed="50"
      :smooth="true"
      :outer-vignette="true"
      :center-vignette="true"
    />
    <!-- <ConferenceSponsorsHeader /> -->
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
  </header>
</template>
