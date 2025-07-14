<template>
  <div>
    <ul class="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
      <NewsCard v-for="item in paginatedNews" :key="item.id" :item="item" v-if="paginatedNews.length" />
      <SeleCtcard v-else v-for="n in itemsPerPage" :key="n" />
    </ul>

    <div v-if="totalPages > 1" class="flex justify-center mt-8 gap-2">
      <!-- Oldingi -->
      <button @click="goToPrevPage" :disabled="currentPage === 1" class="join-item btn">
        <ChevronsLeft :stroke-width="1" />
      </button>

      <!-- Dinamik sahifalar -->
      <button v-for="page in visiblePages" :key="page" @click="setPage(page)" :disabled="page === '...'" :class="[
        'join-item btn',
        page === '...' ? 'cursor-default' : '',
        currentPage === page ? 'btn bg-blue-400 text-white' : ''
      ]">
        {{ page }}
      </button>

      <!-- Keyingi -->
      <button @click="goToNextPage" :disabled="currentPage === totalPages" class="join-item btn">
        <ChevronsRight :stroke-width="1" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ChevronsRight, ChevronsLeft } from 'lucide-vue-next'
import { ref, computed, onMounted } from 'vue'
import { useAconStore } from '@/stores/aconStore'
import NewsCard from '@/components/content/pag-cards/new-cards/newscard.vue'
import SeleCtcard from '@/components/content/pag-cards/new-cards/selectcard.vue'

const newsStore = useAconStore()
const currentPage = ref(1)
const itemsPerPage = 9

onMounted(() => {
  newsStore.loadAcon()
})

// Sahifadagi elementlar
const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return newsStore.items.slice(start, end)
})

// Jami sahifalar
const totalPages = computed(() =>
  Math.ceil(newsStore.items.length / itemsPerPage)
)

// Sahifalash ko‘rinishida '...' bilan ko‘rsatish
const visiblePages = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  const pages = []

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else {
    const showPages = new Set([1, 2, total - 1, total])

    for (let i = current - 1; i <= current + 1; i++) {
      if (i > 2 && i < total - 1) showPages.add(i)
    }

    const sorted = Array.from(showPages).sort((a, b) => a - b)

    for (let i = 0; i < sorted.length; i++) {
      pages.push(sorted[i])
      const next = sorted[i + 1]
      if (next && next - sorted[i] > 1) {
        pages.push('...')
      }
    }
  }

  return pages
})

// Sahifa almashtirish funksiyalari
function setPage(page) {
  if (page === '...') return
  currentPage.value = page
  scrollToTop()
}

function goToNextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    scrollToTop()
  }
}

function goToPrevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
    scrollToTop()
  }
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }) // silliq harakat bilan yuqoriga
}
</script>