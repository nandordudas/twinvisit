<script setup lang="ts">
interface Props {
  fileName: string
  title: string
}

const props = defineProps<Props>()
const { fileName, title } = toRefs(props)

const bgClasses = computed(() => `bg-(no-repeat center cover [url(${fileName.value})])`)
</script>

<template>
  <article
    class="h-48 grow shrink-0 basis-66 p-2 sm:(p-4 basis-64) md:(basis-60) lg:(basis-80) rounded"
    :class="bgClasses"
  >
    <p class="line-clamp-3">
      {{ title }}
    </p>
  </article>
</template>
