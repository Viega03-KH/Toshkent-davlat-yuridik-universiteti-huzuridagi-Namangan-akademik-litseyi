<template>
  <div>
    <div v-if="loading" class="text-center text-gray-500"><span class="loading loading-spinner loading-xl"></span></div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Yutubecard />
      <div v-for="(v, i) in videos" :key="i"
        class="e rounded-xl group hover:bg-white hover:shadow-lg p-3 cursor-pointer transition ease-in-out will-change-transform">
        <iframe class="w-full h-40 rounded-lg" :src="`https://www.youtube.com/embed/${v.videoId}`" :title="v.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen *"
          allowfullscreen></iframe>
        <h3 class="mt-3 text-sm font-semibold line-clamp-2">{{ v.title }}</h3>
        <p class="text-xs text-gray-500">{{ new Date(v.published).toLocaleDateString() }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Yutubecard from '@/components/content/pag-yutube/yutubecard.vue'
import { ref, onMounted } from "vue"
const channelId = "UCTAhGEQDYohjqmDAsD9yRBg"
const videos = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`

    const res = await fetch(apiUrl)
    const data = await res.json()

    if (!data.items) {
      throw new Error("RSS")
    }

    videos.value = data.items.slice(0, 15).map(v => ({
      title: v.title,
      videoId: v.link.split("v=")[1],
      published: v.pubDate
    }));
  } catch (err) {
    error.value = "Videolarni yuklashda xatolik yuz berdi."
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>
