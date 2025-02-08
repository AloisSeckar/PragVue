<template>
  <NuxtLink :to="href">
    <button class="px-4 py-2 rounded border-2 border-vue font-bold hover:bg-gray-300 hover:text-black">
      {{ caption }}
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: { type: String, required: true },
  caption: { type: String, required: true },
})
</script>
