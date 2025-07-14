<template>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box absolute top-10 max-w-full md:max-w-4xl rounded-lg">
      <!-- Qidiruv input -->
      <label class="input input-bordered w-full flex items-center gap-2 relative">
        <input v-model="searchTerm" type="text" class="grow pr-8" placeholder="Qidirish uchun kalit so'z kiriting.."
          @keydown.enter.prevent="performSearch" />
        <button v-if="searchTerm" @click="searchTerm = ''" class="absolute right-3 text-gray-400 hover:text-red-500"
          type="button">
          <CircleX :stroke-width="1" />
        </button>
      </label>

      <!-- Amal tugmalari -->
      <div class="modal-action flex justify-between items-center mt-4">
        <form method="dialog">
          <button class="btn btn-ghost">Yopish</button>
        </form>
        <button class="btn bg-blue-500 flex text-white items-center gap-2" @click="performSearch">
          Qidirish
        </button>
      </div>

      <!-- Natijalar -->
      <div class="py-6 grid grid-cols-1 gap-3 max-h-[500px] overflow-y-auto overflow-x-hidden">
        <div v-if="loading">
          <div class="skeleton h-10 p-3 w-full my-2"></div>
        </div>
        <div v-else-if="results.length === 0" class="text-gray-500 text-center">Hech nima topilmadi</div>
        <router-link @click="closeModal" :to="`/view/news/${item.url}`" v-else v-for="item in results" :key="item.id"
          class="bg-gray-100 p-3 rounded hover:bg-gray-200 cursor-pointer focus:outline-violet-500">
          <strong class="text-md font-light italic">{{ item.name }}</strong>
        </router-link>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { CircleX } from 'lucide-vue-next'
import { ref, watch } from 'vue'
import { useallNewsStore } from '@/stores/newallStore'

const searchTerm = ref('')
const results = ref([])
const loading = ref(false)
const debounceTimer = ref(null)

const allNewsStore = useallNewsStore()
const emit = defineEmits(['select'])

// 🔍 Asosiy qidiruv funksiyasi (darhol ishlaydi)
async function performSearch() {
  if (!searchTerm.value.trim()) return
  loading.value = true

  // Ma’lumotlar hali yuklanmagan bo‘lsa, yuklash
  if (!allNewsStore.items.length) {
    await allNewsStore.loadallNews()
  }

  setTimeout(() => {
    const query = searchTerm.value.toLowerCase()

    results.value = allNewsStore.items.filter(item =>
      item.name?.toLowerCase().includes(query) ||
      item.info?.toLowerCase().includes(query)
    )

    loading.value = false
  }, 4000)
}

// ⏱ Debounce: 0.5s dan keyin avtomatik qidiruv
watch(searchTerm, (newVal) => {
  if (debounceTimer.value) clearTimeout(debounceTimer.value)

  if (!newVal.trim()) {
    results.value = []
    loading.value = false
    return
  }

  debounceTimer.value = setTimeout(() => {
    performSearch()
  }, 500)
})

// ❌ Tozalash
function clearSearch() {
  searchTerm.value = ''
  results.value = []
  loading.value = false
}

// 🔐 Modalni yopish va tozalash
function closeModal() {
  const modal = document.getElementById('my_modal_1')
  if (modal?.close) modal.close()
  clearSearch()
}
</script>
