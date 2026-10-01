<template>
  <div class="pt-2 h-lvh relative isolation overflow-hidden flex flex-col gap-12 items-center justify-center">
    <div class="mt-20 text-6xl flex flex-col md:flex-row gap-4 items-center">
      <UiPragVue />
      <span class="text-gray-500">{{ $t('future') }}</span>
    </div>
    <ConferencePast class="mt-40" />
  </div>
</template>
