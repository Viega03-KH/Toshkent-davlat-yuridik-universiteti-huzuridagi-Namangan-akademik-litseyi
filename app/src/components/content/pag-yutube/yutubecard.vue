<template>
  <div class="max-w-xl mx-auto text-center py-6">
    <!-- Profil rasmi va ism -->
    <div class="flex flex-col items-center gap-2">
      <!-- Rasm va ism yonma-yon -->
      <div class="flex items-center gap-3">
        <img
          :src="profileImage"
          alt="Profil rasmi"
          class="w-28 h-28 rounded-full object-cover border"
        />
        <h1 class="text-lg font-semibold uppercase leading-tight text-left">
          Toshkent davlat yuridik universiteti
        </h1>
      </div>

      <!-- Username -->
      <span class="text-gray-400 text-sm font-semibold">@tsulofficial</span>

      <!-- YouTube tugmasi -->
      <a
        href="https://youtube.com/@tsulofficial"
        target="_blank"
        class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-sm font-medium rounded-md hover:bg-gray-200 border"
      >
        Kanalga o‘tish
      </a>
    </div>
  </div>
</template>

  
  <script setup>
  import profileImage from '@/assets/media/channels4_profile.jpg'
  </script>
  