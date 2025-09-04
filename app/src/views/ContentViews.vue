<template>
  <div class="mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

      <!-- Kontent bo‘limi -->
      <div v-if="filteredContent.length" class="md:col-span-3 bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div v-for="item in filteredContent" :key="item.id" class="mb-10">

          <!-- Sarlavha -->
          <h2 class="text-lg md:text-3xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2 uppercase">
            {{ item.name }}
          </h2>

          <!-- Kontent -->
          <div v-html="item.info" class="prose editor-content prose-blue max-w-none text-justify overflow-x-auto"></div>
        </div>
      </div>

      <!-- Yuklanish holati -->
      <div v-else class="md:col-span-3">
        <ContentSkeleton />
      </div>

      <!-- Yon panel -->
      <aside class="col-span-1 space-y-4">
        <div class="grid grid-cols-1 gap-1">
          <Event />
          <Acon />
          <Telegram />
        </div>
      </aside>
    </div>
  </div>
</template>



<script setup>
import ContentSkeleton from '@/skeleton/content-skeleton.vue'
import Acon from '@/components/content/pag-acon/acon.vue'
import Event from '@/components/content/pag-event/event.vue'
import Telegram from '@/components/comman/media/telegram.vue'
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '@/stores/contentStore'

const route = useRoute()
const contentStore = useContentStore()

const id = computed(() => route.params.id)

const load = () => {
  contentStore.loadContent(id.value) // bu yerda id type sifatida uzatilmoqda
}

onMounted(load)
watch(() => route.params.id, load)

const filteredContent = computed(() =>
  contentStore.items.filter(item => String(item.id) === String(id.value))
)
</script>