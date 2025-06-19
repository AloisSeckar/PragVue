<template>
  <LayoutContainer tag="footer">
    <LayoutContainerContent size-y="small">
      <div class="mb-2 font-mono font-semibold text-center text-woodsmoke-300 text-lg before:content-['<!--_'] after:content-['_-->']">
        © <UiPragVue :year="new Date().getFullYear()" />
      </div>
      <div class="mb-2 font-mono text-sm text-center text-woodsmoke-300">
        Contact us: <NuxtLink to="mailto:info@pragvue.com" class=" hover:text-vue-light">info [at] pragvue.com</NuxtLink>
      </div>
      <div class="flex flex-row gap-3 items-center justify-center mb-2 font-mono text-sm text-center text-woodsmoke-300">
        Follow us:
        <NuxtLink to="https://bsky.app/profile/pragvue.com">
          <img src="/bluesky.png" title="Follow us on Bluesky" alt="PragVue Bluesky" class="p-1 h-6 rounded-md ring-2 ring-vue hover:ring-vue-light">
        </NuxtLink>
        <NuxtLink to="https://x.com/PragVue_conf">
          <img src="/twitter.png" title="Follow us on Twitter/X" alt="PragVue Twitter/X" class="p-1 h-6 rounded-md ring-2 ring-vue hover:ring-vue-light">
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/company/pragvue/">
          <img src="/linkedin.png" title="Follow us on LinkedIn" alt="PragVue LinkedIn" class="p-1 h-6 rounded-md ring-2 ring-vue hover:ring-vue-light">
        </NuxtLink>
      </div>
      <div class="text-xs text-center">
        Powered by
        <NuxtLink to="https://github.com/AloisSeckar/nuxt-ignis" class="text-vue hover:text-vue-light">
          nuxt-ignis
        </NuxtLink>
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>