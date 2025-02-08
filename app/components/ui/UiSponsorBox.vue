<template>
  <div class="p-2">
    <a :title :href>
      <img
        class="inline-block w-auto h-4 md:h-8 cursor-pointer" :src="`/${image}.webp`" :alt
      >
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  href: { type: String, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  alt: { type: String, required: true },
})
</script>
