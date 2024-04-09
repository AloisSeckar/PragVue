<template>
  <div class="flex flex-col min-h-screen px-4 pb-6 items-center justify-start bg-[#dddddd] text-black">
    <a name="idea"><h2 class="mt-4 mb-4 text-4xl text-[#ff6c43] font-bold">{{ $t('idea.title') }}</h2></a>
    <img src="/know-more.png" class="my-4 rounded-lg w-auto h-[150px]" title="Do you want to know more?">
    <h3 class="text-2xl font-bold text-[#ff6c43]">
      {{ $t('idea.q1') }}
    </h3>
    <p class="mb-2 sm:text-justify">
      {{ $t('idea.a1') }}
    </p>
    <h3 class="text-2xl font-bold text-[#ff6c43]">
      {{ $t('idea.q2') }}
    </h3>
    <p class="mb-2 sm:text-justify">
      {{ $t('idea.a2') }}
    </p>
    <h3 class="text-2xl font-bold text-[#ff6c43]">
      {{ $t('idea.q3') }}
    </h3>
    <p class="mb-2 sm:text-justify">
      {{ $t('idea.a3') }}
    </p>
    <div class="mt-8 text-xl text-center">
      {{ $t('idea.idea') }}
    </div>
    <div class="my-4 text-2xl font-bold">
      {{ $t('idea.action') }}
    </div>
    <div class="flex mt-4 gap-2">
      <a href="https://www.konference.cz/" class="rounded-lg hover:border-2 hover:border-[#ff6c43]" :title="$t('idea.join')">
        <img src="/nav-idea-join.jpg" class="rounded-lg w-[250px] h-[120px]" alt="Join PragVue conference">
      </a>
      <a href="#schedule" class="rounded-lg hover:border-2 hover:border-[#ff6c43]" :title="$t('idea.more')">
        <img src="/nav-idea-more.jpg" class="rounded-lg w-[250px] h-[120px]" alt="Get more information">
      </a>
    </div>
  </div>
</template>
