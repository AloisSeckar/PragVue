<template>
  <LayoutContainer>
    <div class="flex flex-col items-center mx-auto mt-12 max-w-206">
      <UiHeading class="mb-10 text-vue-light">
        {{ $t('headings.hackathon') }}
      </UiHeading>

      <i18n-t
        tag="p"
        scope="global"
        keypath="hackathon.info"
        class="mb-4 tracking-[0.01em] max-w-285 text-center text-balance"
      >
        <template #rules>
          <NuxtLink
            to="https://hackhub.pragvue.cz/announcements/hackathon-rules"
            title="Hackathon Rules"
            class="text-vue hover:text-vue-light font-bold hover:cursor-pointer"
          >
            Hackathon Rules
          </NuxtLink>
        </template>
      </i18n-t>

      <i18n-t
        tag="p"
        scope="global"
        keypath="hackathon.topics"
        class="mb-8 tracking-[0.01em] max-w-285 text-center text-balance"
      >
        <template #topics>
          <NuxtLink
            to="https://hackhub.pragvue.cz/"
            title="Hackathon Topics"
            class="text-vue hover:text-vue-light font-bold hover:cursor-pointer"
          >
            Hackathon Topics
          </NuxtLink>
        </template>
      </i18n-t>
    </div>
  </LayoutContainer>
</template>
