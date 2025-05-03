<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading>
        {{ $t('headings.look_back_on_2024') }}
      </UiHeading>
      <div class="flex flex-col items-center gap-4 lg:hidden">
        <p class="text-balance sm:text-lg">
          {{ $t('pages.home.look_back_on_2024') }}
        </p>

        <UiImage
          class="rounded-lg shadow-xl"
          src="/pragvue2024.webp"
          :title="$t('pages.home.link_2024')"
          :alt="$t('accessibility.photo_of_the_speakers_from_2024')"
        />
        <UiLink to="/2024">
          {{ $t('buttons.see_2024') }}
        </UiLink>
      </div>
      <div class="hidden lg:flex flex-row-reverse">
        <div class="flex flex-col justify-center max-w-[50%]">
          <p class="text-balance pl-10 text-lg">
            {{ $t('pages.home.look_back_on_2024') }}
          </p>
          <UiLink to="/2024" class="mt-6 self-center">
            {{ $t('buttons.see_2024') }}
          </UiLink>
        </div>
        <UiImage
          class="rounded-lg shadow-xl"
          src="/pragvue2024.webp"
          :title="$t('pages.home.link_2024')"
          :alt="$t('accessibility.photo_of_the_speakers_from_2024')"
        />
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>
