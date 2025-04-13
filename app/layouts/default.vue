<template>
  <div
    class="min-w-screen max-w-screen flex min-h-dvh flex-col overflow-hidden text-text-main font-[Inter]"
  >
    <main class="px-[var(--layout-horizontal-padding)] py-[var(--layout-vertical-padding)]">
      <slot />
    </main>

    <LayoutFooter class="px-[var(--layout-horizontal-padding)] py-[var(--layout-vertical-padding)]" />
  </div>
</template>
