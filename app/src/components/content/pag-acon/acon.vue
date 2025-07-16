<template>
  <div v-if="aconStore.items.length" class="flex-col grid grid-cols-1 gap-1">
    <div v-for="item in aconStore.items.slice(0, 3)" :key="item.id"
      class="relative h-[197px] w-full flex items-end justify-start text-left bg-cover bg-center rounded-md"
      :style="{ backgroundImage: `url(${item.img})` }">
      <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>

      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <span
          class="text-xs bg-blue-500 text-white px-4 py-1 uppercase rounded-xl hover:bg-white hover:text-blue-500 transition duration-300 cursor-pointer">
          {{ $t('E’lon') }}
        </span>
        <div class="text-white font-normal flex flex-col items-start">
          <span
            class="text-xs bg-blue-500 text-white px-4 py-1 rounded-xl uppercase hover:bg-white hover:text-blue-500 transition duration-300 cursor-pointer">
            {{ item.data }}
          </span>
        </div>
      </div>

      <main class="p-5 z-10">
        <router-link :to="`/view/news/${item.url}`" class="text-md link link-hover text-white">
          {{ item.name }}
        </router-link>
      </main>
    </div>
  </div>

  <!-- Skeleton loader holati -->
  <div v-else class="flex flex-col gap-1">
    <div v-for="n in 3" :key="n" class="relative h-[197px] w-full bg-gray-300 animate-pulse rounded-md">
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <div class="h-6 w-20 skeleton rounded"></div>
        <div class="h-6 w-16 skeleton rounded"></div>
      </div>
      <main class="p-5 z-10 mt-20">
        <div class="h-5 w-2/3 skeleton rounded"></div>
      </main>
    </div>
  </div>
</template>


<script setup>
  import { useAconStore } from '@/stores/aconStore'
  import { onMounted } from 'vue'

  const aconStore = useAconStore()

  onMounted(() => {
    aconStore.loadAcon()
  })
</script>