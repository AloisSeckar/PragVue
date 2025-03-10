<template>
  <MaybeNuxtLink
    class="border-2 font-semibold hover:bg-woodsmoke-800  px-4 py-2 flex items-center gap-2 transition-colors" :class="{
      'border-vue hover:border-vue-light': variant === 'primary',
      'border-woodsmoke-700 hover:border-woodsmoke-600': variant === 'secondary',
    }"
  >
    <!--  leading slot  -->
    <span v-if="$slots.leading" aria-hidden="true">
      <slot name="leading" />
    </span>

    <!--  main content  -->
    <span>
      <slot>
        {{ label }}
      </slot>
    </span>

    <!--  trailing slot  -->
    <span v-if="$slots.trailing" aria-hidden="true">
      <slot name="trailing" />
    </span>
  </MaybeNuxtLink>
</template>

<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import { NuxtLink } from '#components'
import type { NuxtLinkProps } from '#app'

export interface UiButtonProps {
  to?: NuxtLinkProps['to']
  href?: NuxtLinkProps['to']
  label?: string
  variant?: 'primary' | 'secondary'
}

const {
  to,
  href,
  label,
  variant = 'primary',
} = defineProps<UiButtonProps>()

const link = computed(() => to || href || null)

const MaybeNuxtLink: FunctionalComponent = (props, ctx) => {
  if (link.value) {
    return h(NuxtLink, { to: link.value }, ctx.slots)
  }

  return h('button', {}, ctx.slots)
}
</script>
