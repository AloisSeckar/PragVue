<template>
  <LayoutContainer class="h-dvh relative isolation">
    <IconPragueSilhouette class="absolute bottom-0 inset-x-1/2 -z-10 pgv-hero-banner__bg" />

    <div class="flex flex-row gap-4 justify-center items-center absolute top-0 left-1/2 -translate-x-1/2 p-2 w-full">
      <UiSponsorBox
        v-for="sponsor in sponsors" :key="sponsor.image" :to="sponsor.to" :image="sponsor.image"
        :title="sponsor.title" :alt="sponsor.alt" no-background size="sm"
      />
    </div>

    <LayoutContainerContent class="h-[calc(100%-32px)]">
      <div class="flex flex-col gap-3">
        <TheLogo tag="h1" />

        <p class="text-sm sm:text-lg md:text-2xl text-center">
          {{ $t('headings.the_czech_vuejs_conference') }}
        </p>
      </div>

      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center">
          <p class="text-xs uppercase text-gray-500">
            When
          </p>
          <p class="text-sm sm:text-lg md:text-3xl text-center font-bold">
            {{ $t('2025.when') }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-xs uppercase text-gray-500 ">
            Where
          </p>
          <p class="text-sm sm:text-lg md:text-xl text-center text-vue underline">
            <NuxtLink to="https://www.hotel-grandium.cz/" class="hover:text-vue-light">
              {{ $t('2025.where') }}
            </NuxtLink>
          </p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 items-center pt-6">
        <UiButton suffix-icon="🎫" href="https://pragvue.konference.cz/" :label="$t('buttons.tickets_1')" />
        <UiButton suffix-icon="🗺️" href="https://maps.app.goo.gl/vWW31EiriqbdCpTW8" :label="$t('2025.map')" variant="secondary" />
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const { sponsors } = useSponsorList()
</script>

<style scoped>
.pgv-hero-banner__bg {
    transform: translateX(-50%);
    width: clamp(1200px, 100%, 2000px);
}
</style>
