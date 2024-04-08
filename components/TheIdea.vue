<template>
  <div class="flex flex-col h-screen items-center justify-start bg-[#dddddd] text-black">
    <a name="idea"><h2 class="mt-6 mb-4 text-4xl text-[#ff6c43] font-bold">{{ $t('idea.title') }}</h2></a>
    <p>O čem je tahle akce a proč na ni chcete být</p>
    <div class="flex mt-4 gap-2">
      <a href="https://www.konference.cz/" class="rounded-lg hover:border-2 hover:border-[#ff6c43]">
        <img src="/nav-idea-join.jpg" class="rounded-lg w-[250px] h-[120px]">
      </a>
      <a href="#features" class="rounded-lg hover:border-2 hover:border-[#ff6c43]">
        <img src="/nav-idea-more.jpg" class="rounded-lg w-[250px] h-[120px]">
      </a>
    </div>
  </div>
</template>
