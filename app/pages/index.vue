<template>
  <div>
    <header class="pt-2 h-lvh relative isolation overflow-hidden flex flex-col items-center justify-center">
      <!-- <ConferenceSponsorsHeader /> -->
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
        <UiMoreInfo />
      </main>
    </header>
    <LazyConferenceInfo2026 />
    <LazyConferenceNewsletter />
    <LazyConferenceSponsors />
    <LazyConferencePast />
  </div>
</template>
