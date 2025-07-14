<!-- src/components/NewsCard.vue -->
<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true
    }
  })
</script>
<template>
  <div class="relative w-full h-[600px] bg-cover bg-center flex flex-col justify-end rounded-md"
    :style="{ backgroundImage: `url(${item.img})` }">

    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

    <div class="absolute top-0 left-0 right-0 p-2 flex justify-between items-center">
      <span
        class="text-xs bg-blue-500 text-white px-4 py-1 uppercase rounded-xl hover:bg-white hover:text-blue-500 transition duration-300 cursor-pointer">
        Yangilik
      </span>
      <div class="text-white font-normal flex flex-col items-start">
        <span
          class="text-xs bg-blue-500 text-white px-4 py-1 rounded-xl uppercase hover:bg-white hover:text-blue-500 transition duration-300 cursor-pointer">
          {{ item.data }}
        </span>
      </div>
    </div>

    <main class="relative py-10 px-5">
      <router-link :to="`/view/news/${item.url}`" class="text-md text-2xl font-bold link link-hover text-white">
        {{ item.name }}
      </router-link>
    </main>
  </div>

</template>