<template>
  <div
    class="min-w-screen max-w-screen flex min-h-dvh flex-col overflow-hidden"
  >
    <main class="px-2 py-4">
      <slot />
    </main>

    <LayoutFooter class="px-2 py-4" />
  </div>
</template>
