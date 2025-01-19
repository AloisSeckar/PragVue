<template>
  <LayoutContainer class="pgv-hero-banner">
    <IconPragueSilhouette class="pgv-hero-banner__bg" />

    <LayoutContainerContent class="flex flex-col items-center justify-center gap-4 sm:gap-6 h-full">
      <TheLogo />

      <p class="text-sm sm:text-lg md:text-2xl text-center">
        {{ $t('messages.the_czech_vuejs_conference') }}
      </p>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.pgv-hero-banner {
    position: relative;
    height: 40rem;
    isolation: isolate;
    overflow: hidden;
}

.pgv-hero-banner__bg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(1200px, 100%, 2000px);
    z-index: -1;

}
</style>
