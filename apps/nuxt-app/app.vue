<script setup lang="ts">
const route = useRoute()

useHead({
  titleTemplate: `${route.meta.title} - Twinvisit`,
  meta: [
    { name: 'color-scheme', content: 'light -dark' },
  ],
  htmlAttrs: {
    lang: 'en-US',
    class: 'bg-gray-50 text-gray-600 font-sans',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
