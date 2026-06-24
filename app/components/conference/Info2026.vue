<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <a id="info" />
      <div class="flex flex-col items-center">
        <UiHeading2026 class="mb-6 text-vue-light">
          {{ $t('2026.info') }}
        </UiHeading2026>

        <div class="text-center">
          <i18n-t keypath="2026.when" tag="p" scope="global" class="tracking-[0.01em] max-w-[64ch] text-xl mb-4">
            <template #date>
              <strong>{{ $t('2026.date') }}</strong>
            </template>
          </i18n-t>

          <div class="flex flex-row gap-2 text-2xl mb-4 justify-center">
            <i18n-t keypath="2026.where" tag="p" scope="global" class="tracking-[0.01em] max-w-[64ch]">
              <template #venue>
                <a href="https://arthurspub.cz/" target="_blank" rel="noopener noreferrer" class="underline text-vue hover:text-vue-dark">The Arthurs Pub</a>
              </template>
            </i18n-t>
            <a href="https://maps.app.goo.gl/fcDwXBv6fFXNoEQQ6" :title="$t('2026.map')" class="hidden min-[718px]:inline-block">🗺️</a>
          </div>

          <i18n-t keypath="2026.tickets" tag="p" scope="global" class="tracking-[0.01em] max-w-[64ch] text-2xl mb-4">
            <template #price>
              <strong class="text-vue-light text-2xl whitespace-nowrap">{{ $t('tickets.price2026') }}</strong>
            </template>
          </i18n-t>

          <p class="tracking-[0.01em] max-w-[64ch] text-lg text-justify mb-4">
            {{ $t('2026.what') }}
          </p>

          <i18n-t keypath="2026.more" tag="p" scope="global" class="tracking-[0.01em] max-w-[64ch] text-lg text-justify">
            <template #soon>
              <strong class="text-yellow-400">{{ $t('2026.soon') }}</strong>
            </template>
          </i18n-t>
        </div>
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>
