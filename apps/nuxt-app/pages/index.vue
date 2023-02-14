<!-- eslint-disable max-len -->
<script setup lang="ts">
definePageMeta({
  title: 'Home page',
})

const { data: properties } = await useLazyAsyncData('properties', () => $fetch('/api/properties'))
</script>

<template>
  <section class="flex flex-col sm:(flex-row flex-wrap) gap-2" data-page="index">
    <template v-if="Array.isArray(properties)">
      <TheProperty
        v-for="property in properties"
        :key="property.id"
        v-bind="{ property }"
      />
    </template>
  </section>
</template>
