<template>
  <NuxtLink :to="href">
    <button class="rounded border-2 border-vue font-bold hover:bg-woodsmoke-800 hover:border-vue-light">
      <div class="px-4 py-2 hover:animate-pulse">{{ caption }}</div>
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: { type: String, required: true },
  caption: { type: String, required: true },
})
</script>
