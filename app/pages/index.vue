<template>
  <div class="pt-2 h-lvh relative isolation overflow-hidden flex flex-col gap-12 items-center justify-center">
    <UiAnimLetterGlitch
      :glitch-colors="['#fef08a', '#3aa173', '#42B883', '#3aa173', '#42B883', '#ffffff']"
      :glitch-speed="50"
      :smooth="true"
      :outer-vignette="true"
      :center-vignette="false"
    />
    <div aria-hidden="true" class="contrast-backdrop absolute inset-0 bg-emerald-950 backdrop-blur-sm pointer-events-none" />
    <div class="relative z-10 flex flex-col gap-6">
      <div class="mt-20 text-6xl flex flex-col md:flex-row gap-4 items-center">
        <UiPragVue />
        <span class="text-gray-500">{{ $t('future') }}</span>
      </div>
      <ConferencePast class="mt-40" />
    </div>
  </div>
</template>

<style scoped>
/* mask alpha drives both the tint and the blur strength: dense in the center, light at the edges */
.contrast-backdrop {
  mask-image: radial-gradient(
    rgb(0 0 0 / 0.90) 0%,
    rgb(0 0 0 / 0.80) 40%,
    rgb(0 0 0 / 0.75) 80%,
    rgb(0 0 0 / 0.25) 100%
  );
}
</style>
