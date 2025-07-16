<template>
  <li class="flex">
    <router-link :to="`/view/news/${item.url}`"
      class="group relative block h-[350px] w-full shadow-lg rounded-md text-left bg-cover bg-center cursor-pointer overflow-hidden hover:scale-[102%] transition ease-in-out will-change-transform"
      :style="{ backgroundImage: `url(${item.img})` }">
      <!-- Gradient -->
      <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>

      <!-- Kategoriya va sana -->
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <span v-if="item.type === 1"
          class="text-xs bg-blue-500 text-white rounded-xl px-4 py-1 uppercase hover:bg-white hover:text-blue-500 transition duration-300">
          {{ $t('Yangilik') }}
        </span>
        <span v-else-if="item.type === 2"
          class="text-xs bg-blue-500 text-white rounded-xl px-4 py-1 uppercase hover:bg-white hover:text-blue-500 transition duration-300">
          {{ $t("E'lon") }}
        </span>
        <span v-else
          class="text-xs bg-blue-500 text-white rounded-xl px-4 py-1 uppercase hover:bg-white hover:text-blue-500 transition duration-300">
          {{ $t("Tadbir") }}
        </span>
        <div class="text-white font-normal flex flex-col items-start">
          <span
            class="text-xs bg-blue-500 rounded-xl text-white px-4 py-1 uppercase hover:bg-white hover:text-blue-500 transition duration-300">
            {{ item.data }}
          </span>
        </div>
      </div>

      <!-- Kontent (nomi) -->
      <main class="p-5 z-10 absolute bottom-0">
        <h2 class="text-md text-white">
          {{ item.name }}
        </h2>
      </main>

      <!-- Pastki chiziq (hoverda chiqadi) -->
      <span
        class="absolute bottom-0 left-0 h-[4px] w-full bg-blue-400 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
    </router-link>
  </li>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>
