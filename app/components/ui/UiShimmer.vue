<template>
  <span class="ui-shimmer relative inline-block px-10 pt-2 pb-1">
    <slot />
    <span class="ui-shimmer-overlay absolute inset-y-0 -inset-x-[100vw] pointer-events-none" aria-hidden="true" />
  </span>
</template>

<style scoped>
.ui-shimmer-overlay {
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(66, 184, 131, 0.08) 45%,
    rgba(66, 184, 131, 0.15) 50%,
    rgba(66, 184, 131, 0.08) 55%,
    transparent 70%
  );
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
