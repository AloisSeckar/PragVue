<template>
  <div class="flex flex-col min-h-screen items-center justify-center bg-[url('/bg1.webp')] bg-center bg-cover">
    <div class="w-full max-w-[800px] p-2 flex flex-col flex-grow justify-center text-center">
      <div class="flex flex-col md:flex-row gap-6 md:gap-2 my-4 justify-center items-center text-[#dddddd] font-bold">
        <a href="https://www.evidencz.com/">
          <img
            class="inline-block w-auto h-4 md:h-8 cursor-pointer" src="/eviden.webp"
            title="Eviden Czech Republic" alt="Eviden logo"
          >
        </a>
        <span class="hidden md:inline">&</span>
        <a href="https://www.exponet.cz/">
          <img
            class="inline-block w-auto h-5 md:h-8 cursor-pointer" src="/exponet.webp"
            title="Exponet - Your Event Manager" alt="Exponet logo"
          >
        </a>
      </div>
      <div class="text-xl text-[#dddddd] mb-6 md:mb-8">
        {{ $t('intro.present') }}
      </div>
      <div>
        <img
          class="inline-block w-auto h-32 cursor-pointer mb-2" src="/pragvue.svg"
          title="PragVue" alt="PragVue logo"
        >
      </div>
      <div class="flex flex-col min-[660px]:flex-row justify-center mb-4">
        <h1 class="inline-block mx-4 text-[56px] md:text-[72px]">
          <span class="font-bold">PragVue 2025</span>
        </h1>
      </div>
      <div class="mb-4 text-xl text-[#dddddd]">
        {{ $t('intro.2025pt1') }}
      </div>
      <div class="mb-4 text-2xl font-bold">
        {{ $t('intro.2025pt2') }}
      </div>
      <div class="mb-8 text-xl">
        {{ $t('intro.2025pt3') }}
      </div>

      <div class="mb-2 text-xl text-amber-300 hover:text-[#ff6c43] font-bold">
        <a href="/2024" title="PragVue 2024">{{ $t('intro.2024') }}</a>
      </div>
      <div>
        <img
          class="inline-block w-auto w-[400px] cursor-pointer mb-8" src="/pragvue2024.webp"
          title="PragVue 2024 speakers" alt="PragVue 2024 speakers"
        >
      </div>
      <div class="pt-1 px-8 pb-4">
        <hr class="mb-1">
        &copy; 2024
        <a class="font-bold hover:text-[#ff6c43]" href="https://www.evidencz.com/" title="Eviden Czech Republic">www.evidencz.com</a>
      </div>
      <!--
      <div class="mb-10 text-xl text-[#dddddd]">
        {{ $t('intro.place') }}
        <a href="https://maps.app.goo.gl/kYzHaNKrc346BVfbA">🗺️</a>
      </div>
      <a href="#idea">
        <button :class="BUTTON_LIGHT">
          {{ $t('intro.more') }}
        </button>
      </a>
      -->
    </div>
  </div>
</template>
