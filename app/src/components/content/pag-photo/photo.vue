<template>
  <!-- Yuklanayotgan holat -->
  <div v-if="photoStore.loading" class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    <div v-for="n in 2" :key="n" class="skeleton h-[30vh] w-full rounded-sm"></div>
  </div>

  <!-- Rasm ro‘yxati -->
  <div v-else class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-1">
    <div v-for="(item, index) in photoStore.items.slice(0, 100)" :key="item.id" class="group cursor-pointer relative" :data-aos="'zoom-in-up'"
      :data-aos-delay="index" @click="openModal(item.id)">
      <img :src="item.url" loading="lazy" :alt="item.title || 'Image'"
        class="w-full rounded-xl lg:h-[30vh] object-cover transition-transform transform" />
      <div
        class="absolute inset-0 flex items-center justify-center transition-opacity">
        <a
          class="bg-white text-gray-800 px-2 py-2 rounded-full hover:bg-blue-400 hover:text-white transition ease-in-out will-change-transform group-hover:scale-[120%]">
          <Expand :stroke-width="0.5" />
        </a>
      </div>
    </div>
  </div>

  <dialog id="my_modal_13" class="modal">
    <div class="modal-box absolute max-w-4xl rounded-sm overflow-hidden bg-transparent p-0">
      <img :src="selectedPhoto?.url" alt="Preview" loading="lazy" class="w-full rounded-xl" />
      <button @click.stop="goToPrev"
        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full z-10 hover:bg-blue-400 hover:text-white transition ease-in-out will-change-transform group-hover:scale-[120%]">
        <ArrowLeft class="w-5 h-7" :stroke-width="1.5" />
      </button>
      <button @click.stop="goToNext"
        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full z-10 hover:bg-blue-400 hover:text-white transition ease-in-out will-change-transform group-hover:scale-[120%]">
        <ArrowRight class="w-5 h-7" :stroke-width="1.5" />
      </button>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>



</template>


<script setup>
import { ref, onMounted } from 'vue'
import { usePhotoStore } from '@/stores/photoStore'
import { Expand, ArrowRight, ArrowLeft } from 'lucide-vue-next'

const photoStore = usePhotoStore()
const selectedPhoto = ref(null)
const currentIndex = ref(0)

const openModal = (id) => {
  const index = photoStore.items.findIndex(item => item.id === id)
  if (index !== -1) {
    currentIndex.value = index
    selectedPhoto.value = photoStore.items[index]
    document.getElementById('my_modal_13')?.showModal()
  }
}

const goToPrev = () => {
  if (photoStore.items.length === 0) return
  currentIndex.value = (currentIndex.value - 1 + photoStore.items.length) % photoStore.items.length
  selectedPhoto.value = photoStore.items[currentIndex.value]
}

const goToNext = () => {
  if (photoStore.items.length === 0) return
  currentIndex.value = (currentIndex.value + 1) % photoStore.items.length
  selectedPhoto.value = photoStore.items[currentIndex.value]
}

onMounted(() => {
  photoStore.loadPhoto()
})

</script>
