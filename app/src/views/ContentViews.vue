<template>
  <div>
    <!-- Maqola mavjud bo‘lsa -->
    <div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-1">
        <div v-if="filteredContent.length"
          class="col-span-1 md:col-span-3 bg-white items-center py-4 px-2 overflow-y-auto">
          <div v-for="item in filteredContent" :key="item.id">
            <h2 class="text-2xl font-bold mb-4 pb-4 border-b border-gray-200 uppercase">{{ item.name }}</h2>
            <p v-html="item.info" class="editor-content text-justify w-[1000px]"></p>
          </div>
        </div>
        <div v-else class="col-span-1 md:col-span-3 bg-white items-center py-4 px-2">
          <ContentSkeleton />
        </div>
        <div class="col-span-1 px-2">
          <div class="grid grid-cols-1 gap-1">
            <Telegram />
            <Event />
            <Acon />
          </div>
        </div>
      </div>
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