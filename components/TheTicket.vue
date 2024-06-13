<template>
  <a name="ticket" />
  <div :class="PAGE_BLOCK" class="bg-[url('/bg3.webp')]">
    <div :class="CONTENT_LEFT" class="text-xl">
      <div class="inline-block mb-8 text-[45px] sm:text-[65px]">
        <span class="font-bold">PragVue</span> 2024
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="text-2xl mb-2" v-html="$t('idea.title')" />
      <p class="text-2xl mb-8">
        {{ $t('idea.date') }}
      </p>
    </div>

    <div :class="CONTENT_RIGHT">
      <div :class="CARD_GRAY">
        <div class="mb-4 text-[40px] font-bold">
          {{ $t('ticket.title') }}
        </div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="text-2xl mb-6" v-html="$t('ticket.price')" />
        <a href="https://pragvue.konference.cz/">
          <button :class="BUTTON_DARK">
            {{ $t('ticket.sign') }}
          </button>
        </a>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="text-xl mt-6 my-4" v-html="$t('ticket.questions') + ' 📧'" />
      </div>
    </div>
  </div>

  <div class="pt-1 px-8 pb-4 bg-black text-center">
    <hr class="mb-1">
    &copy; 2024 <a class="hover:text-[#ff6c43]" href="https://www.evidencz.com/" title="Eviden">https://www.evidencz.com</a>
  </div>
</template>
