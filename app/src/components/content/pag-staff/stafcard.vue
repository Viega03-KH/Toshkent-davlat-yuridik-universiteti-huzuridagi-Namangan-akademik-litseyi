<template>
  <div v-if="staffStore.items.length">
    <div v-for="item in staffStore.items" :key="item.id"
      class="flex my-4 flex-col md:flex-row items-center md:items-center bg-gradient-to-r from-blue-100 to-white rounded-xl shadow-md overflow-hidden transition duration-300">
      <!-- Rasm qismi -->
      <figure class="w-full md:w-[380px] h-[300px] flex items-center justify-center bg-start overflow-hidden">
        <img :src="item.img" alt="staff" class="object-cover w-full h-full md:rounded-l-xl" />
      </figure>

      <!-- Ma'lumotlar qismi -->
      <div class="px-4 pt-6 flex flex-col justify-between space-y-4 w-full">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800">{{ item.name }}</h2>
          <p class="text-gray-600">{{ item.lavozm }}</p>
        </div>

        <div class="space-y-2 text-gray-700">
          <p class="flex items-center gap-2">
            <Phone class='text-blue-600 ' :size="18" />
            {{ item.tel }}
          </p>
          <p class="flex items-center gap-2">
            <Mail class='text-blue-600 ' :size="18" />
            {{ item.email }}
          </p>
          <p class="flex items-center gap-2">
            <CalendarFold class='text-blue-600 ' :size="18"></CalendarFold>
            {{ item.qabul }}
          </p>
        </div>

        <div class="flex justify-end p-1">
          <button class="btn" @click="openModal(item)">
            Biografiyasi
          </button>
        </div>
      </div>
    </div>

    <StaffModal v-if="selectedItem" :item="selectedItem" @close="selectedItem = null" />
  </div>
  <div v-else>
    <div class="flex w-full flex-col gap-4">
      <div v-for="n in 2" :key="n" class="skeleton h-[300px] w-full"></div>
    </div>
  </div>  
</template>



<script setup>
  import { ref, onMounted } from 'vue'
  import { useStaffStore } from '@/stores/staffStore'
  import StaffModal from './starfmodal.vue'
  import { CalendarFold, Mail, Phone } from 'lucide-vue-next'

  const staffStore = useStaffStore()
  const selectedItem = ref(null)

  onMounted(() => {
    staffStore.loadStaff()
  })

  function openModal(item) {
    selectedItem.value = item
  }
</script>