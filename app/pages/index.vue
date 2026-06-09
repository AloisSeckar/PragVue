<template>
  <div>
    <header class="pt-2 h-lvh relative isolation overflow-hidden flex flex-col items-center justify-center">
      <div class="font-bold mb-3">
        <UiShimmer>
          <h1 style="font-size: 80px">
            <UiPragVue2026 :year="2026" />
          </h1>
        </UiShimmer>
      </div>
      <main class="text-center">
        <div class="text-2xl mb-2">
          <span class="text-gray-400">{{ $t('2026.subtitle') }}</span>
        </div>
        <div class="text-3xl mb-6">
          <span class="text-yellow-400">{{ $t('2026.date') }}</span>
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
        <div class="text-xl mb-6 mx-auto w-42.5 text-center">
          <UiButtonIcon icon="🔍" href="#info" :label="$t('buttons.more')" variant="secondary" />
        </div>
      </main>
    </header>
    <LazyConferenceInfo2026 />
    <LazyConferenceNewsletter />
    <LazyConferencePast />
  </div>
</template>
