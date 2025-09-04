<template>
    <div class="mx-auto py-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <!-- Asosiy maqola qismi -->
            <div v-if="newsItem" class="md:col-span-3 bg-white rounded-xl shadow-md border border-blue-200 p-6">
                <!-- Sarlavha -->
                <h1 class="text-3xl font-bold text-gray-800 mb-4 leading-snug">
                    {{ newsItem.name }}
                </h1>

                <!-- Sana va Media -->
                <div class="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div class="flex items-center gap-2">
                        <CalendarRange class="w-5 h-5" :stroke-width="1" />
                        <span>{{ newsItem.data }}</span>
                    </div>
                    <Media class="hidden md:flex" />
                </div>

                <!-- Rasm -->
                <img :src="newsItem.img" alt="News image"
                    class="object-cover object-center rounded-lg mb-6" />

                <!-- Kontent -->
                <div class="editor-content prose max-w-none prose-blue prose-sm sm:prose lg:prose-lg text-justify">
                    <div v-html="newsItem.info" />
                </div>
            </div>

            <!-- Yuklanayotgan holat -->
            <div v-else class="md:col-span-3">
                <ContentSkeleton />
            </div>

            <!-- Yon panel -->
            <div class="col-span-1 space-y-4">
                <div class="grid grid-cols-1 gap-1">
                    <Event />
                    <Acon />
                    <Telegram />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { CalendarRange } from 'lucide-vue-next'
import Media from '@/components/comman/media/media.vue'
import ContentSkeleton from '@/skeleton/content-skeleton.vue'
import Acon from '@/components/content/pag-acon/acon.vue'
import Event from '@/components/content/pag-event/event.vue'
import Telegram from '@/components/comman/media/telegram.vue'
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useallNewsStore } from '@/stores/newallStore'

const newsStore = useallNewsStore()
const route = useRoute()
const url = ref(route.params.url)

const loadNews = () => {
    newsStore.loadallNews()
}

onMounted(() => {
    loadNews()
})

watch(() => route.params.url, (newUrl) => {
    url.value = newUrl
    loadNews()
})

const newsItem = computed(() => {
    return newsStore.items.find(item => item.url === url.value)
})
</script>