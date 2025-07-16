<template>
  <div>
    <div class="grid gap-24 row-gap-8 lg:grid-cols-5">
      <div class="grid gap-8 lg:col-span-2">
        <a class="flex flex-col group bg-white border border-gray-200 shadow-2xs overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
          href="#">
          <div class="relative pt-[100%] sm:pt-[100%] lg:pt-[80%] overflow-hidden">
            <img
              class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out"
              src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Card Image">
          </div>
        </a>
      </div>

      <div class="grid rounded lg:col-span-3 sm:grid-cols-2 divide-x divide-solid border-b">

        <div v-for="item in statStore.items" :key="item.id" class="flex flex-col border-b justify-between p-10">
          <div>
            <p class="text-xl font-black text-blue-800 sm:text-4xl italic">
              {{ item.number }}
            </p>
            <p class="text-lg font-light text-black sm:text-base italic">
              {{ item.title }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStatStore } from '@/stores/statStore'

const statStore = useStatStore()

onMounted(() => {
  statStore.loadStat()
})

</script>
