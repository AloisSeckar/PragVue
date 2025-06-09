<template>
  <LayoutContainerContent>
    <div class="mb-6 flex flex-col items-center">
      <UiHeading class="mb-6 text-vue">
        {{ $t('headings.tickets') }}
      </UiHeading>

      <div :key="countdown" class="text-2xl font-bold text-center mb-4 inline">
        {{ $t('pages.home.early_bird_tickets') }}
        <div :class="countdownColor">
          {{ countdown }}
        </div>
      </div>

      <span class="pgv-price pgv-price--full text-woodsmoke-400">
        €249
      </span>

      <span class="pgv-price relative -top-2 text-vue-light">
        €199
      </span>
    </div>

    <div class="flex flex-col gap-4 items-center justify-center">
      <UiButtonIcon icon="🎫" href="https://pragvue.konference.cz/" :label="$t('buttons.tickets_2')" />

      <p class="mb-8 max-w-[24ch] text-center text-balance text-red-400 text-md">
        {{ $t('pages.home.early_bird_tickets_info') }}
      </p>
    </div>
  </LayoutContainerContent>
</template>

<script setup lang="ts">
const timeZero = Math.floor(new Date('2025-07-01T00:00:00').valueOf() / 1000)
const countdownColor = ref('text-vue-dark hover:text-vue')
const countdown = ref(getCountdownValue())
const { resume } = useIntervalFn(() => {
  countdown.value = getCountdownValue()
}, 1000)
resume()

function getCountdownValue() {
  const timeNow = Math.floor(Date.now() / 1000)
  const diff = timeZero - timeNow
  return formatTime(diff > 0 ? diff : 0)
}

function formatTime(seconds: number) {
  const days = Math.floor(seconds / 86400)
  const hrs = Math.floor((seconds % 86400) / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  if (days < 3) {
    countdownColor.value = 'text-red-400 hover:text-red-300'
  }
  else if (days < 14) {
    countdownColor.value = 'text-amber-400 hover:text-amber-300'
  }

  const dd = String(days)
  const hh = String(hrs).padStart(2, '0')
  const mm = String(mins).padStart(2, '0')
  const ss = String(secs).padStart(2, '0')

  return `${dd}D ${hh}H ${mm}M ${ss}S`
}
</script>

<style scoped>
.pgv-price {
  font-size: 3.5rem;
  font-weight: 800;
}

.pgv-price--full {
  font-size: 2.5rem;
  text-decoration: line-through;
  font-weight: 500;
}
</style>
