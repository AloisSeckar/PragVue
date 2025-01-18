<template>
  <a name="idea" />
  <div :class="PAGE_BLOCK" class="bg-[#dddddd] text-black">
    <div :class="CONTENT_LEFT">
      <p class="text-2xl font-bold">
        {{ $t('idea.q1') }}
      </p>
      <p class="text-lg mb-4">
        {{ $t('idea.a1') }}
      </p>
      <p class="text-2xl font-bold">
        {{ $t('idea.q2') }}
      </p>
      <p class="text-lg mb-4">
        {{ $t('idea.a2') }}
      </p>
      <p class="text-2xl font-bold">
        {{ $t('idea.q3') }}
      </p>
      <p class="text-lg mb-8">
        {{ $t('idea.a3') }}
      </p>
      <p class="text-lg mb-8">
        {{ $t('idea.idea') }}
      </p>
      <p class="text-3xl font-bold text-center lg:text-right">
        {{ $t('idea.action') }}
      </p>
    </div>

    <div :class="CONTENT_RIGHT">
      <div class="inline-block text-[66px]">
        <span class="font-bold">PragVue</span> 2024
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="text-2xl mb-2" v-html="$t('idea.title')" />
      <p class="text-2xl mb-8">
        {{ $t('idea.date') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-2">
        <a href="https://pragvue.konference.cz/" class="hidden">
          <button :class="BUTTON_DARK">
            {{ $t('intro.register') }}
          </button>
        </a>
        <a href="#schedule">
          <button :class="BUTTON_DARK">
            {{ $t('intro.more') }}
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
