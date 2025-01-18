<template>
  <UCard>
    <template #header>
      <div class="w-full text-center">
        <UAvatar
          :src="`/speakers/${image}.jpg`"
          :title="name"
          :alt="about"
          size="3xl"
        />
      </div>
    </template>
    <template #default>
      <div class="text-center text-xl font-bold">
        <NuxtLink :title="`${name} - ${link}`" :to="link">
          {{ name }}
        </NuxtLink>
      </div>
      <div class="mb-2 text-center font-bold">
        [{{ country }}]
      </div>
      <div class="text-center">
        {{ about }}
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, default: 'TBA' },
  country: { type: String, default: '?' },
  about: { type: String, default: '...' },
  link: { type: String, default: '#' },
  image: { type: String, default: '_blank' },
})
</script>
