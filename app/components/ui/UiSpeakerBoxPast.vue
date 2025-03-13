<template>
  <li class="odd:ml-20 even:mr-20 mb-4 flex flex-row gap-4 items-center">
    <NuxtImg
      :src="`/speakers/${img}.jpg`"
      :alt="`${name} profile pic`"
      :title="name"
      class="w-12 h-12 rounded-full"
    />
    <div>
      <strong class="text-vue">{{ name }}</strong> {{ dscr }}
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  img: string
  dscr: string
}>()
</script>
