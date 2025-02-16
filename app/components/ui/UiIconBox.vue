<template>
  <div class="size-32 p-6 flex items-center justify-center pgv-icon-box">
    <img
      v-if="icon"
      class="pgv-icon-box__img"
      :src="`/logos/${icon}.${extension}`"
      alt=""
      loading="lazy"
    >
  </div>
</template>

<script setup lang="ts">
const {
  icon,
} = defineProps<{
  icon: 'vue' | 'nuxt' | 'pinia' | 'vitest' | 'vite' | 'vueuse' | 'tresjs' | 'nuxt-ignis' | 'rollup' | 'oxc' | 'tailwind' | 'unjs' | 'h3' | 'nitro' | 'supabase' | null
}>()

const extension = computed(() => {
  if (['nuxt-ignis'].includes(icon as string)) {
    return 'png'
  }

  return 'svg'
})
</script>

<style scoped>
.pgv-icon-box {
  position: relative;
  transition: transform 400ms cubic-bezier(.45,0,.3,1);
  isolation: isolate;
}

.pgv-icon-box::after {
  content: '';
  position: absolute;
  inset: 0;
  @apply bg-woodsmoke-800;
}

.pgv-icon-box::before {
  content: '';
  position: absolute;
  inset: -1rem;

  background: #0e0e0e;
  transform: translate(1rem, 1rem);
  filter: blur(40px);
  transition: transform 400ms cubic-bezier(.45,0,.3,1), opacity 450ms ease-out;
  opacity: 0;
}

.pgv-icon-box:hover::before {
  transform: translate(2rem, 2rem);
  opacity: 0.5;
}

.pgv-icon-box:hover {
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
