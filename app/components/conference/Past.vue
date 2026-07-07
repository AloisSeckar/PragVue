<template>
  <LayoutContainer>
    <div class="flex flex-col items-center">
      <UiHeading class="mb-6 text-vue-light">
        {{ $t('past.title') }}
      </UiHeading>
      <div class="text-center mb-2">
        {{ $t('past.subtitle') }}
      </div>
      <div class="flex flex-row gap-5 items-center justify-center">
        <UiButton to="/2025" :title="$t('past.2025')" class="justify-center rounded-xl border-vue-light px-8 py-4 text-xl text-white hover:border-vue hover:bg-vue! hover:text-vue-light">
          2025
        </UiButton>
        <UiButton to="/2024" :title="$t('past.2024')" class="justify-center rounded-xl border-vue-light px-8 py-4 text-xl text-white hover:border-vue hover:bg-vue! hover:text-vue-light">
          2024
        </UiButton>
      </div>
    </div>
  </LayoutContainer>
</template>
