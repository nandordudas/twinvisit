<script setup lang="ts">
interface Props {
  fileName: string
  title: string
  description: string
}

const props = defineProps<Props>()
const { description, fileName, title } = toRefs(props)
</script>

<template>
  <article class="h-48 grow shrink-0 basis-66 relative sm:(basis-64) md:(basis-60) lg:(basis-80) rounded">
    <img :src="fileName" alt="" class="w-full h-full aspect-16/9 object-cover">
    <div class="absolute inset-x-0 bottom-0 p-2 bg-gray-100/80">
      <h3 class="text-xl font-bold">
        {{ title }}
      </h3>
      <small class="line-clamp-2 max-h-12 overflow-hidden">
        {{ description }}
      </small>
    </div>
  </article>
</template>
