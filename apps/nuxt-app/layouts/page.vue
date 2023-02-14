<template>
  <div
    class="flex flex-col gap-2 min-h-screen bg-neutral-100 text-neutral-500 mx-auto"
    data-layout="page"
  >
    <TheHeader />
    <main class="flex flex-col grow p-2">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
