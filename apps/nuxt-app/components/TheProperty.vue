<script setup lang="ts">
import type { Property } from '~/types'

interface Props {
  property: Property
}

const props = defineProps<Props>()
const { property } = toRefs(props)
</script>

<template>
  <article class="relative sm:(max-w-50% w-96 grow)">
    <span class="absolute bottom-0 m-2 p-2 bg-white/80 rounded">
      <h3 class="text-xl text-gray-600">
        <NuxtLink :to="`/properties/${property.id}`">
          {{ property.title }}
        </NuxtLink>
      </h3>
      <p class="text-gray-600 font-bold">
        {{ property.description }}
      </p>
    </span>
    <img :src="property.imageUrl" :alt="property.imageAlt" class="aspect-16/9 rounded">
  </article>
</template>
