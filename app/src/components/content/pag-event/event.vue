<template>
    <div class="bg-[#2D5D9F] text-white w-full h-[600px] p-5 shadow-md space-y-4 rounded-md overflow-hidden">
        <!-- Sarlavha -->
        <div class="flex items-center justify-between border-b border-white/50 pb-2">
            <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 19V6h13M5 6H4a1 1 0 00-1 1v11a1 1 0 001 1h1m0-13v13m0-13h10" />
                </svg>
                <h2 class="text-lg font-semibold">Tadbirlar</h2>
            </div>
            <router-link to="/view/event" class="text-sm hover:underline">Barchasi</router-link>
        </div>

        <!-- E'lonlar ro'yxati -->
        <div v-if="eventStore.items.length" class="space-y-3 max-h-[500px] overflow-y-auto pr-2">
            <!-- E'lonlar -->
            <div class="space-y-1 cursor-pointer" v-for="item in eventStore.items.slice(0, 8)" :key="item.id">
                <router-link :to="`/view/news/${item.url}`" class="text-md link link-hover text-white">
                    {{ item.name }}
                </router-link>
                <div class="flex items-center justify-between text-sm">
                    <span>{{ item.data }}</span>
                    <span>
                        <CircleArrowRight :size="20" :stroke-width="0.8" />
                    </span>
                </div>
                <hr class="border-dashed border-white/50">
            </div>
        </div>

        <!-- Skeleton yuklanmoqda -->
        <div v-else class="space-y-4 max-h-[450px] overflow-y-auto pr-2">
            <div v-for="n in 4" :key="n" class="space-y-1 animate-pulse">
                <div class="h-10 w-3/4 rounded skeleton"></div>
                <div class="flex items-center justify-between text-sm">
                    <div class="h-5 w-1/4 rounded skeleton"></div>
                    <div class="h-5 w-3 rounded skeleton"></div>
                </div>
                <hr class="border-dashed border-white/30">
            </div>
        </div>
    </div>
</template>


<script setup>
import { CircleArrowRight } from 'lucide-vue-next'
import { useEventStore } from '@/stores/eventStore'
import { onMounted } from 'vue'

const eventStore = useEventStore()

onMounted(() => {
    eventStore.loadEvent()
})
</script>