<template>
    <div class="text-center mt-20">
      <h1 class="text-5xl font-bold text-red-600">404</h1>
      <p class="text-lg mt-4">Kechirasiz bunday sahifa mavjud emas !</p>
      <router-link to="/" class="text-blue-500 underline mt-4 block">Bosh sahifaga qaytish</router-link>
      <div class="py-4">
        <SearchButton />
      </div>
    </div>
</template>


<script setup>
import SearchButton from '@/components/searchbar/search-button.vue'
</script>