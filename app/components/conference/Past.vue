<template>
  <LayoutContainer>
    <div class="flex flex-col items-center">
      <UiHeading class="mb-6 text-vue">
        {{ $t('past.title') }}
      </UiHeading>
      <div class="text-center mb-2">
        {{ $t('past.subtitle') }}
      </div>
      <div class="flex flex-row gap-5 items-center justify-center">
        <NuxtLink to="/2025" class="text-3xl transition-all duration-300 hover:underline hover:text-vue-light hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(66,184,131,0.5)] inline-block" :title="$t('past.2025')">2025</NuxtLink>
        <NuxtLink to="/2024" class="text-3xl transition-all duration-300 hover:underline hover:text-vue-light hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(66,184,131,0.5)] inline-block" :title="$t('past.2024')">2024</NuxtLink>
      </div>
    </div>
  </LayoutContainer>
</template>
