<script setup lang="ts">
const route = useRoute()

useHead({
  titleTemplate: `${route.meta.title} - Twinvisit`,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
