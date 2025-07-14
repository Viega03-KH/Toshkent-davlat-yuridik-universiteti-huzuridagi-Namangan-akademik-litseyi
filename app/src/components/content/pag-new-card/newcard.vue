<script setup>
import { computed, onMounted } from 'vue'
import { useNewsStore } from '@/stores/newStore'
import NewsCard from '@/components/content/pag-cards/new-cards/newscard.vue'
import SeleCtcard from '@/components/content/pag-cards/new-cards/selectcard.vue'

const newsStore = useNewsStore()

onMounted(() => {
  newsStore.loadNews()
})

// Faqat 6 ta yangilikni ko‘rsatish
const visibleNews = computed(() => newsStore.items.slice(0, 6))
</script>


<template>
    <div>
      <!-- Yangiliklar ro‘yxati -->
      <ul class="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        <NewsCard
          v-for="item in visibleNews"
          :key="item.id"
          :item="item"
          v-if="visibleNews.length"
        />
        <SeleCtcard v-else v-for="n in 6" :key="n" />
      </ul>
    </div>
  </template>
  