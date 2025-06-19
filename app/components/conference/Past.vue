<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-12 text-vue">
        {{ $t('headings.look_back_on_2024') }}
      </UiHeading>

      <i18n-t
        tag="p"
        scope="global"
        keypath="pages.home.look_back_on_2024"
        class="mb-12 tracking-[0.01em] max-w-[128ch] text-balance"
      />

      <NuxtLink to="/2024">
        <UiImage
          class="w-auto aspect-[1200/971] max-h-[330px] px-2"
          fit="contain"
          src="/pragvue2024.webp"
          :title="$t('pages.home.link_2024')"
          :alt="$t('accessibility.photo_of_the_speakers_from_2024')"
        />
      </NuxtLink>
    </LayoutContainerContent>
  </LayoutContainer>
</template>
