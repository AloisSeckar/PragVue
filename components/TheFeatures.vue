<template>
  <a name="features" />
  <div :class="PAGE_BLOCK" class="bg-[#dddddd] text-black">
    <div :class="CONTENT_LEFT" class="text-xl">
      <div class="inline-block mb-4 text-[34px] font-bold">
        {{ $t('features.title') }}
      </div>
      <p>
        {{ $t('features.technology') }}
      </p>
      <p>
        {{ $t('features.people') }}
      </p>
      <p class="font-bold">
        {{ $t('features.food') }}
      </p>
      <p class="mb-4">
        {{ $t('features.offer') }}
      </p>
      <a href="#ticket">
        <button :class="BUTTON_DARK">
          {{ $t('features.ticket') }}
        </button>
      </a>
    </div>

    <div :class="CONTENT_RIGHT">
      <img src="/features.webp" class="w-auto h-[240px]" alt="PragVue 2024 features">
    </div>
  </div>
</template>
