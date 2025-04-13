<template>
  <UiBox
    background="pseudo"
    class="size-32 flex items-center justify-center pgv-icon-box"
    :class="{
      'pgv-icon-box--active': active,
    }"
  >
    <img
      v-if="icon"
      class="pgv-icon-box__img"
      :src="`/logos/${icon}.${extension}`"
      alt=""
      loading="lazy"
    />
  </UiBox>
</template>

<script setup lang="ts">
const { icon, active } = defineProps<{
  icon: VueIcon
  active?: boolean
}>()

const extension = computed(() => {
  if (icon && ['nuxt-ignis', 'vueform', 'formkit'].includes(icon)) {
    return 'png'
  }
  return 'svg'
})
</script>

<style scoped>
.pgv-icon-box {
  position: relative;
  transition: transform 400ms cubic-bezier(0.45, 0, 0.3, 1);
  isolation: isolate;
}

.pgv-icon-box::before {
  content: '';
  position: absolute;
  inset: -1rem;

  background: #0e0e0e;
  transform: translate(1rem, 1rem);
  filter: blur(40px);
  transition:
    transform 400ms cubic-bezier(0.45, 0, 0.3, 1),
    opacity 450ms ease-out;
  opacity: 0;
}

.pgv-icon-box:hover::before,
.pgv-icon-box--active::before {
  transform: translate(2rem, 2rem);
  opacity: 0.5;
}

.pgv-icon-box:hover,
.pgv-icon-box--active {
  transform: translate(-1rem, -1rem);
  transition-duration: 325ms;
  z-index: 1;
}

.pgv-icon-box__img {
  -webkit-user-drag: none;
  user-select: none;
  z-index: 1;
}
</style>
