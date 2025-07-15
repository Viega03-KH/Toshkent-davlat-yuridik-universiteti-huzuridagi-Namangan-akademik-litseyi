<template>
    <div class="max-w-xl mx-auto text-center bg-blue-50 px-8 rounded-sm shadow-2xl">
      <!-- Profil rasmi va ism -->
      <div class="flex flex-col items-center space-y-1">
        <img
          :src="profileImage"
          alt="Profil rasmi"
          class="w-20 h-20 rounded-full object-cover border"
        />
        <h1 class="text-lg font-lingth uppercase leading-tight">Toshkent davlat yuridik universiteti</h1>
        <span class="text-gray-400 text-sm font-semibold">@tsulofficial</span>
  
        <!-- YouTube tugmasi -->
        <a
          href="https://youtube.com/@tsulofficial"
          target="_blank"
          class="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-sm font-medium rounded-md hover:bg-gray-200 border"
        >
          Kanalga o‘tish
        </a>
      </div>
  
      <!-- Statistika -->
      <div class="grid grid-cols-3 gap-4 mt-6">
        <div class="bg-white rounded-lg border p-2">
          <div class="text-lg font-bold">758</div>
          <div class="text-sm text-gray-600">Videolar</div>
        </div>
        <div class="bg-white rounded-lg border p-2">
          <div class="text-lg font-bold">11,9 ming</div>
          <div class="text-sm text-gray-600">Kuzatuvchilar</div>
        </div>
        <div class="bg-white rounded-lg border p-2">
          <div class="text-lg font-bold">696 206</div>
          <div class="text-sm text-gray-600">Ko‘rishlar</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import profileImage from '@/assets/media/channels4_profile.jpg'
  </script>
  