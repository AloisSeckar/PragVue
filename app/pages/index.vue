<template>
  <header class="pt-2 h-lvh relative isolation overflow-hidden flex flex-col items-center justify-center">
    <div class="text-5xl font-bold mb-3">
      <UiShimmer>
        <h1><UiPragVue2026 :year="2026" /></h1>
      </UiShimmer>
    </div>
    <main class="text-center">
      <div class="text-2xl mb-2">
        <span class="text-gray-400">{{ $t('future2026') }}</span>
        <span class="ml-1 cursor-wait inline-block transition-transform duration-300 hover:scale-125 hover:animate-bounce">👀</span>
      </div>
      <div class="text-3xl mb-6">
        <span class="text-yellow-400">{{ $t('date2026') }}</span>
      </div>
      <div class="text-xl mb-6">
        <span class="text-gray-400">{{ $t('info2026') }}</span>
      </div>
      <div class="flex flex-row gap-3 items-center justify-center mb-6 font-mono text-sm text-center text-woodsmoke-300">
        <NuxtLink to="https://bsky.app/profile/pragvue.com">
          <img src="/bluesky.png" :title="$t('footer.bluesky')" alt="PragVue Bluesky" class="p-2 h-10 rounded-md ring-2 ring-vue hover:ring-vue-light">
        </NuxtLink>
        <NuxtLink to="https://x.com/PragVue_conf">
          <img src="/twitter.png" :title="$t('footer.twitter')" alt="PragVue Twitter/X" class="p-2 h-10 rounded-md ring-2 ring-vue hover:ring-vue-light">
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/company/pragvue/">
          <img src="/linkedin.png" :title="$t('footer.linkedin')" alt="PragVue LinkedIn" class="p-2 h-10 rounded-md ring-2 ring-vue hover:ring-vue-light">
        </NuxtLink>
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
