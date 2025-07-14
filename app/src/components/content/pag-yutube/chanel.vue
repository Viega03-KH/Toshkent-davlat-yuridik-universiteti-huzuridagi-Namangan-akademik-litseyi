<template>
    <div class="p-4">
      <h2 class="text-xl font-bold mb-4">Shunga o‘xshash videolar</h2>
  
      <div v-if="relatedVideos.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="video in relatedVideos" :key="video.id.videoId" class="shadow rounded overflow-hidden">
          <iframe
            class="w-full aspect-video"
            :src="`https://www.youtube.com/embed/${video.id.videoId}`"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <p class="mt-2 px-2 text-sm font-medium">{{ video.snippet.title }}</p>
        </div>
      </div>
  
      <div v-else class="text-gray-500">Tavsiya etilgan videolar yuklanmoqda...</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const relatedVideos = ref([])
  const BASE_VIDEO_ID = '7ghhRHRP6t4' // <-- bu videoga o‘xshashlar olinadi
  
  onMounted(async () => {
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        relatedToVideoId: BASE_VIDEO_ID,
        part: 'id,snippet',
        type: 'video',
        maxResults: '9'
      },
      headers: {
        'x-rapidapi-key': '0cf3f2eee0mshd85cc3a65fbdf65p11469cjsn4bd3c449b3b7',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
      }
    }
  
    try {
      const response = await axios.request(options)
      relatedVideos.value = response.data.items
    } catch (error) {
      console.error('Tavsiya etilgan videolarni olishda xatolik:', error)
    }
  })
  </script>
  
  <style scoped>
  .aspect-video {
    aspect-ratio: 16 / 9;
  }
  </style>
  