<script setup lang="ts">
definePageMeta({
  title: 'Home page',
})

const fileNames: string[] = [
  '/images/pexels-kate-trifo-3992003.webp',
  '/images/pexels-carissa-rogers-1504236.webp',
  '/images/pexels-proxyclick-visitor-management-system-2451567.webp',
  '/images/pexels-max-vakhtbovych-6238608.webp',
  '/images/pexels-brett-sayles-2475270.webp',
]

const description = `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim doloremque quod incidunt aliquam dolores illum placeat
repudiandae, in eius et quae similique tenetur, nulla illo, eum natus voluptatum velit dolore?
`
</script>

<template>
  <section class="flex flex-wrap gap-2 sm:gap-4">
    <TheArticle
      v-for="(fileName, i) in fileNames"
      :key="i"
      :file-name="fileName"
      :description="description"
      title="Lorem ipsum dolor sit amet"
    />
  </section>
</template>
