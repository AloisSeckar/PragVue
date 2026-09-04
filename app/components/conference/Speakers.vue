<template>
  <LayoutContainer>
    <a id="speakers" />
    <div class="flex flex-col items-center mt-12">
      <UiHeading class="mb-6 text-vue-light">
        {{ $t('headings.the_speakers') }}
      </UiHeading>

      <div class="text-center tracking-[0.01em] max-w-[64ch] text-xl mb-4">
        {{ $t('spakers.info') }}
      </div>

      <div class="mx-auto mt-4 flex flex-row flex-wrap justify-center gap-4">
        <div v-for="(speaker, index) in speakers" :key="index">
          <a v-if="speaker.github !== 'speaker'" :href="`https://www.linkedin.com/in/${speaker.linkedin}`">
            <NuxtImg
              :src="speaker.bg" :alt="speaker.name" :title="speaker.name"
              class="w-40 h-40 rounded-lg shadow-lg"
            />
          </a>
          <div v-else>
            <NuxtImg
              :src="speaker.bg" :alt="speaker.name" :title="speaker.name"
              class="w-40 h-40 rounded-lg shadow-lg"
            />
          </div>
          <div class="text-center text-lg mt-2">
            {{ speaker.name }}
          </div>
          <NuxtImg
            :src="`/flags/${speaker.country}.png`"
            :alt="$t('swiper.flag', { country: speaker.country })"
            :title="speaker.country"
            :width="40" :height="26" class="mx-auto my-2"
          />
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
import { speakers } from '~/data/speakers-2026'
</script>
