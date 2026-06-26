<template>
  <div class="flex flex-col sm:flex-row gap-4 items-center">
    <UiButtonIcon
      v-if="ticketsShow"
      icon="🎫" :href="ticketsLink" :label="$t('buttons.tickets')"
    />
    <UiButtonIcon
      variant="secondary"
      icon="🔍" :href="`#${anchor}`" :title="$t(buttonLabel)" :label="$t(buttonLabel)"
    />
    <div v-if="socialsShow" class="flex flex-row gap-4">
      <NuxtLink to="https://bsky.app/profile/pragvue.com">
        <img src="/bluesky.png" :title="$t('social.bluesky')" alt="PragVue Bluesky" class="p-2 h-10 rounded-md ring-2 ring-vue hover:ring-vue-light">
      </NuxtLink>
      <NuxtLink to="https://x.com/PragVue_conf">
        <img src="/twitter.png" :title="$t('social.twitter')" alt="PragVue Twitter/X" class="p-2 h-10 rounded-md ring-2 ring-vue hover:ring-vue-light">
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/company/pragvue/">
        <img src="/linkedin.png" :title="$t('social.linkedin')" alt="PragVue LinkedIn" class="p-2 h-10 rounded-md ring-2 ring-vue hover:ring-vue-light">
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  anchor = 'info',
  buttonLabel = 'buttons.more',
  socialsShow = true,
  ticketsShow = false,
} = defineProps<{
  anchor?: string
  buttonLabel?: string
  socialsShow?: boolean
  ticketsShow?: boolean
  ticketsLink?: string
}>()
</script>
