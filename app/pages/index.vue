<template>
  <header class="pt-2 h-lvh relative isolation overflow-hidden flex flex-col items-center justify-center">
    <div class="text-5xl font-bold mb-3">
      <UiShimmer>
        <h1><UiPragVue2026 :year="2026" /></h1>
      </UiShimmer>
    </div>
    <main class="text-center">
      <div class="text-3xl mb-2">
        <span class="text-gray-400">{{ $t('future2026') }}</span>
        <span class="ml-1 cursor-wait inline-block transition-transform duration-300 hover:scale-125 hover:animate-bounce">👀</span>
      </div>
      <div class="text-xl mb-6">
        <span class="text-gray-400">{{ $t('info2026') }}</span>
      </div>
    </main>
    <nav>
      <div class="text-xl mb-2">
        <span class="text-gray-400">{{ $t('past.title') }}</span>
      </div>
      <div class="flex flex-row gap-5 items-center justify-center">
        <NuxtLink to="/2025" class="text-xl transition-all duration-300 hover:underline hover:text-vue-light hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(66,184,131,0.5)] inline-block" :title="$t('past.2025')">2025</NuxtLink>
        <NuxtLink to="/2024" class="text-xl transition-all duration-300 hover:underline hover:text-vue-light hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(66,184,131,0.5)] inline-block" :title="$t('past.2024')">2024</NuxtLink>
      </div>
    </nav>
  </header>
</template>
