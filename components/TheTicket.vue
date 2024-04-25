<template>
  <a name="ticket" />
  <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-screen p-8 items-center justify-start bg-[url('/bg3.webp')] bg-center bg-cover">
    <div class="inline-block lg:w-1/2 text-center lg:text-right text-xl">
      <div class="inline-block mb-8 text-[45px] sm:text-[65px]">
        <span class="font-bold">PragVue</span> 2024
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="text-2xl mb-2" v-html="$t('idea.title')" />
      <p class="text-2xl mb-8">
        {{ $t('idea.date') }}
      </p>
    </div>

    <div class="inline-block lg:w-1/2 text-center lg:text-left">
      <div class="px-6 py-4 bg-[#dddddd] text-black rounded-xl">
        <div class="mb-4 text-[40px] font-bold">
          {{ $t('ticket.title') }}
        </div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="text-2xl mb-6" v-html="$t('ticket.price')" />
        <a href="https://pragvue.konference.cz/">
          <button class="inline-block mx-auto px-10 py-4 bg-[#002D3C] rounded-3xl text-2xl text-white font-bold hover:text-black hover:border-2 hover:border-black hover:bg-white">
            {{ $t('ticket.sign') }}
          </button>
        </a>
      </div>
    </div>
  </div>

  <div class="pt-1 px-8 pb-4 bg-black text-center">
    <hr class="mb-1">
    &copy; 2024 <a class="hover:text-[#ff6c43]" href="https://www.evidencz.com/" title="Eviden">https://www.evidencz.com</a>
  </div>
</template>
