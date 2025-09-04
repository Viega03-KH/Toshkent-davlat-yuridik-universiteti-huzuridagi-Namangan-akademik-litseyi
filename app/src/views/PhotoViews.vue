<template>
    <div>
        <form class="filter flex gap-2 mb-4 justify-end">
            <label>
                <input type="radio" name="content" value="photo" class="hidden peer" @change="activeTab = 'photo'" />
                <span class="btn btn-square peer-checked:bg-blue-400 peer-checked:text-white"
                    aria-label="Foto Lavhalar">
                    <Camera :stroke-width="0.5" class="w-5 h-5" />
                </span>
            </label>

            <label>
                <input type="radio" name="content" value="video" class="hidden peer" checked
                    @change="activeTab = 'video'" />
                <span class="btn btn-square peer-checked:bg-blue-400 peer-checked:text-white" aria-label="Video">
                    <Youtube :stroke-width="0.5" class="w-5 h-5" />
                </span>
            </label>
        </form>

        <div>
            <Chanel v-if="activeTab === 'video'" />
            <Photo v-if="activeTab === 'photo'" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Camera, Youtube } from 'lucide-vue-next'
import Chanel from '@/components/content/pag-yutube/chanel.vue'
import Photo from '@/components/content/pag-photo/photo.vue'
const activeTab = ref('video') 
</script>