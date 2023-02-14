<template>
  <div data-layout="default" class="grid gap-2 grid-cols-1 sm:(grid-cols-2 gap-4) md:(grid-cols-4)">
    <header class="sm:col-span-2 md:col-span-4">
      <nav class="container mx-auto p-2 sm:p-4">
        <ul class="flex justify-between">
          <li>
            <i class="i-carbon-menu" />
          </li>
          <li>twinvisit</li>
          <li>
            <i class="i-carbon-translate" />
          </li>
        </ul>
      </nav>
      <div class="bg-(green-200 no-repeat center cover [url(images/pexels-ian-beckley-2528186.webp)])">
        <section class="container mx-auto p-2 sm:p-4">
          <div class="w-full h-48 bg-gray-100/80 rounded" />
        </section>
      </div>
    </header>
    <main class="flex grow container mx-auto p-2 sm:(col-span-2 p-4) md:(col-span-4)">
      <slot />
    </main>
    <footer class="sm:col-span-2 md:col-span-4">
      <section class="container mx-auto p-2 sm:p-4">
        <p>&copy; 2023</p>
      </section>
    </footer>
  </div>
</template>
