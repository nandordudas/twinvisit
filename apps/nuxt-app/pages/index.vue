<script setup lang="ts">
definePageMeta({
  title: 'Home page',
})

const fileNames: string[] = [
  'https://firebasestorage.googleapis.com/v0/b/twinvisit---dev.appspot.com/o/pexels-kate-trifo-3992003.webp?alt=media&token=c7cfedb9-c36c-4f45-9b81-47656f4d8ec3',
  'https://firebasestorage.googleapis.com/v0/b/twinvisit---dev.appspot.com/o/pexels-carissa-rogers-1504236.webp?alt=media&token=1b10d87c-ce35-4f61-8fff-dfd3a33f1a2a',
  'https://firebasestorage.googleapis.com/v0/b/twinvisit---dev.appspot.com/o/pexels-proxyclick-visitor-management-system-2451567.webp?alt=media&token=90ccccda-c58c-4857-bd53-1e9239f6c991',
  'https://firebasestorage.googleapis.com/v0/b/twinvisit---dev.appspot.com/o/pexels-max-vakhtbovych-6238608.webp?alt=media&token=a044d7f6-d0af-4b35-b562-36e40292d8c6',
  'https://firebasestorage.googleapis.com/v0/b/twinvisit---dev.appspot.com/o/pexels-brett-sayles-2475270.webp?alt=media&token=3ebab0cb-18fb-4de0-9801-168e5cbe2378',
]

const title = `
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
      :title="title"
    />
  </section>
</template>
