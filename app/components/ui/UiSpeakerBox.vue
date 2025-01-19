<template>
  <div>
    <div class="pgv-speaker-box">
      <UiImage
        class="pgv-speaker-box__img"
        :src="imgSrc"
        :alt="$t('accessibility.photo_of_speaker_name', { name })"
      />
      <div class="absolute right-0 bottom-0 w-min">
        <span class="font-default font-bold text-woodsmoke-900 bg-white px-3 py-1 text-xl pgv-speaker-box__name">
          {{ name }}
        </span>
      </div>
    </div>

    <p v-if="description" class="text-xs text-center mt-4 text-woodsmoke-400">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import UiImage from '~/components/ui/UiImage.vue'

const {
  name,
  img,
  description,
} = defineProps<{
  name: string
  img: string | { githubUsername: string }
  description?: string
}>()

const imgSrc = computed(() => {
  if (typeof img === 'string') {
    return img
  }

  return `https://github.com/${img.githubUsername}.png`
})
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
