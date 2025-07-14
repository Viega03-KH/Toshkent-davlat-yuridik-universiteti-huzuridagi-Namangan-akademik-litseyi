<script setup>
import bgImage from '@/assets/bgimg/tg_bg-1.png'
</script>

<template>
  <a href="https://t.me/sizning_kanalingiz" target="_blank" rel="noopener noreferrer"
     class="relative items-center justify-between gap-4 rounded-md px-3 py-7 bg-no-repeat bg-cover bg-center hover:shadow-lg transition-all ease-in-out duration-100"
     :style="{ backgroundImage: `url(${bgImage})` }">
     
    <div class="absolute inset-0 bg-opacity-25 rounded-md bg-blue-800"></div>

    <div class="relative">
      <h2 class="text-xl font-bold text-white md:text-2xl">Telegram</h2>
      <p class="text-white">kanalimizni kuzatib boring</p>
    </div>
  </a>
</template>
