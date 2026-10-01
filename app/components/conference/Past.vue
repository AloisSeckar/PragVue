<template>
  <LayoutContainer>
    <div class="flex flex-col items-center">
      <UiHeading class="mb-6 text-3xl! text-vue-light">
        {{ $t('past.title') }}
      </UiHeading>
      <div class="text-center mb-4">
        {{ $t('past.subtitle') }}
      </div>
      <div class="flex flex-col min-[460px]:flex-row gap-5 items-center justify-center">
        <UiButton to="/2026" :title="$t('past.2026')" class="justify-center rounded-xl border-vue px-8 py-4 text-xl text-white hover:bg-vue-light! hover:text-black">
          2026
        </UiButton>
        <UiButton to="/2025" :title="$t('past.2025')" class="justify-center rounded-xl border-vue px-8 py-4 text-xl text-white hover:bg-vue-light! hover:text-black">
          2025
        </UiButton>
        <UiButton to="/2024" :title="$t('past.2024')" class="justify-center rounded-xl border-vue px-8 py-4 text-xl text-white hover:bg-vue-light! hover:text-black">
          2024
        </UiButton>
      </div>
    </div>
  </LayoutContainer>
</template>
