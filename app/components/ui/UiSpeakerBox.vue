<template>
  <div>
    <div class="mb-4 pgv-speaker-box">
      <UiImage
        class="pgv-speaker-box__img"
        :src="imgSrc"
        :title="name"
        :alt="$t('accessibility.photo_of_speaker_name', { name })"
        fit="rounded"
        crossorigin="anonymous"
      />
      <div class="absolute right-0 bottom-0 w-min">
        <NuxtLink :to="`https://github.com/${github}`">
          <span class="font-default font-bold text-woodsmoke-900 bg-vue px-3 py-1 text-xl pgv-speaker-box__name">
            {{ name }}
          </span>
        </NuxtLink>
      </div>
    </div>

    <NuxtImg
      :src="countrySrc" :alt="`${country} flag`" :title="country"
      :width="40" :height="26" class="mx-auto my-2"
    />

    <i18n-t :keypath="dscrSrc" scope="global" tag="p" class="w-[250px] text-sm text-center text-woodsmoke-400">
      <br>
    </i18n-t>
  </div>
</template>

<script setup lang="ts">
const {
  name,
  country,
  github,
} = defineProps<{
  name: string
  country: string
  github: string
}>()

const imgSrc = `https://github.com/${github}.png`
const countrySrc = `/flags/${country}.png`
const dscrSrc = `speakers.${github}`
</script>

<style scoped>
.pgv-speaker-box {
  position: relative;
  flex-shrink: 0;
  padding: 1rem;
}

.pgv-speaker-box__img {
  width: 11.5rem;
  height: 11.5rem;

  transition: transform 400ms cubic-bezier(.45,0,.3,1);
}

.pgv-speaker-box:hover .pgv-speaker-box__img {
  transform: scale(1.05);
  transition-duration: 250ms;
}

.pgv-speaker-box__name {
  box-decoration-break: clone;
}
</style>
