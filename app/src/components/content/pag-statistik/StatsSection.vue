<template>
  <div>
    <div class="grid gap-24 row-gap-8 lg:grid-cols-5">
      <div class="grid gap-8 lg:col-span-2">
        <article
          class="relative isolate flex flex-col justify-end overflow-hidden pb-8 pt-40 px-4">
          <img :src="contactbg"
            alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70"></div>
          <div class="absolute inset-0 bg-blue-900/10 "></div>
          <!-- <h3 class="z-10 absolute top-10 font-extrabold text-white"><Logo color="text-white" /></h3> -->
          <h3 class="z-10 absolute bottom-10 text-4xl font-extrabold text-white uppercase">{{ $t("litseyimizning asosiy ko'rsatkichlar:") }}</h3>
        </article>
      </div>

      <div class="grid rounded lg:col-span-3 sm:grid-cols-2 divide-x divide-solid border-b">

        <div v-for="item in statStore.items" :key="item.id" class="flex flex-col cursor-pointer border-b justify-between hover:shadow-lg p-10 hover:bg-blue-900 group transition duration-100 ease-out">
          <div class="group-hover:scale-105 transition duration-100 ease-out" >
            <p class="text-xl font-black text-blue-800 sm:text-4xl italic group-hover:text-white will-change-transform">
              {{ item.number }}
            </p>
            <p class="text-lg font-light text-black sm:text-base italic group-hover:text-white will-change-transform">
              {{ item.title }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import contactbg from '@/assets/bgimg/contact.jpg'
import { onMounted } from 'vue'
import { useStatStore } from '@/stores/statStore'

const statStore = useStatStore()

onMounted(() => {
  statStore.loadStat()
})

</script>
