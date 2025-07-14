<template>
    <div>
        <!-- Maqola mavjud bo‘lsa -->
        <div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-1">
                <div v-if="newsItem" class="col-span-1 md:col-span-3 px-2 items-center py-4 bg-white">
                    <h2 class="text-2xl text-center md:text-justify font-bold mb-4 pb-4">{{ newsItem.name }}</h2>
                    <img :src="newsItem.img" class="rounded-md w-full object-cover object-top pb-4">
                    <p v-html="newsItem.info" class="editor-content text-justify overflow-y-auto"></p>
                </div>
                <div v-else class="col-span-1 md:col-span-3 px-2 bg-white">
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
    