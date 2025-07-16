<template>
  <div v-if="rootMenus.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6 h-[80vh] md:h-auto overflow-y-auto">
    <!-- Statik sahifalar -->
    <div class="flex flex-col gap-2">
      <div class="text-blue-700 font-semibold text-lg border-l-4 border-blue-500 pl-3 mb-2">
        {{ $t('Boshqa') }}
      </div>
      <router-link v-for="link in staticLinks" :key="link.to" :to="link.to" @click="closeDrawer"
        class="text-gray-700 text-sm hover:text-blue-600 hover:underline transition-all duration-150 pl-3">
        {{ $t(link.label) }}
      </router-link>
    </div>
    <!-- Dinamik menyular -->
    <div v-for="parent in rootMenus" :key="parent.id" class="flex flex-col">
      <!-- Parent nomi -->
      <div class="text-blue-700 font-semibold text-lg border-l-4 border-blue-500 pl-3 mb-2">
        {{ parent.name }}
      </div>
      <!-- Sub menyular -->
      <div v-if="hasChildren(parent.id)" class="pl-3 flex flex-col gap-2 border-l border-gray-200 ml-1">
        <router-link v-for="child in getChildren(parent.id)" :key="child.id"
          :to="child.url || `/view/contant/${child.content_id}`" @click="closeDrawer"
          class="text-gray-700 text-sm hover:text-blue-600 hover:underline transition-all duration-150">
          {{ child.name }}
        </router-link>
      </div>
    </div>
  </div>

  <!-- Skeleton holat -->
  <div v-else>
    <ContentSkeleton />
  </div>
</template>


<script setup>
import ContentSkeleton from '@/skeleton/content-skeleton.vue'
import { onMounted, computed } from 'vue'
import { useMenuStore } from '@/stores/menuStore'

const menuStore = useMenuStore()

onMounted(() => {
  menuStore.loadMenu()
})

// Statik sahifalar uchun menyu
const staticLinks = [
  { to: '/', label: 'Bosh sahifa' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Bog‘lanish' },
]

// Kategoriyalar
const rootMenus = computed(() =>
  menuStore.items
    .filter(item => item.parent === 0)
    .slice() // reverse safe
    .reverse()
)

const hasChildren = (parentId) =>
  menuStore.items.some(item => Number(item.parent) === Number(parentId))

const getChildren = (parentId) =>
  menuStore.items
    .filter(item => Number(item.parent) === Number(parentId))
    .slice()
    .reverse()

function closeDrawer() {
  const drawer = document.getElementById('my-drawer')
  if (drawer && drawer.checked) {
    drawer.checked = false
  }
}
</script>
