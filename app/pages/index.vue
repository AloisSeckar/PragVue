<template>
  <div class="pt-2 h-lvh relative isolation overflow-hidden flex flex-col items-center justify-center">
    <div class="text-3xl">
      <UiPragVue /> <span class="text-gray-500">will return</span>
    </div>
    <div class="flex flex-row gap-5 items-center justify-center mt-6">
      <NuxtLink to="/2025" class="text-xl hover:underline hover:text-vue-light" title="2025 edition">2025</NuxtLink>
      <NuxtLink to="/2024" class="text-xl hover:underline hover:text-vue-light" title="2024 edition">2024</NuxtLink>
    </div>
  </div>
</template>
