<script setup lang="ts">
interface Props {
  showHero?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showHero: () => false,
})
</script>

<template>
  <header class="flex flex-col gap-2">
    <nav class="w-full p-2 h-16 flex gap-x-4 justify-center">
      <div class="flex items-center justify-center w-8">
        🍔
      </div>
      <div class="flex grow items-center justify-center">
        <h1 class="text-2xl">
          <NuxtLink to="/">
            Twinvisit
          </NuxtLink>
        </h1>
      </div>
      <div class="w-8">
        &nbsp;
      </div>
    </nav>
    <div v-if="props.showHero" class="h-64 items-center flex flex-col gap-4 p-2 hero">
      <h2 class="text-xl text-white">
        Find your next commercial property
      </h2>
      <form>
        <input type="text" placeholder="Enter location" class="px-4 py-2 rounded">
      </form>
    </div>
  </header>
</template>

<style scoped>
.hero {
  background-image: url(
    https://www.loopnet.com/modules/home/content/images/07-sanfrancisco.jpg?v=31fe986b255239c93d90965eba0c4832
  );
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
