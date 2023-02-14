<script setup lang="ts">
definePageMeta({
  layout: 'page',
})

const route = useRoute()

const { data: property } = await useLazyAsyncData(
  `property-${route.params.id}`,
  () => $fetch(`/api/properties?id=${route.params.id}`),
)

useHead({
  titleTemplate: () => {
    return !Array.isArray(property.value) ? property.value?.title ?? null : ''
  },
})
</script>

<template>
  <div v-if="!property || Array.isArray(property)">
    No content or something went wrong
  </div>
  <template v-else>
    <TheProperty v-bind="{ property }" />
  </template>
</template>
