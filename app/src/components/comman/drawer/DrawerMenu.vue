<template>
  <div v-if="rootMenus.length" class="grid grid-cols-1 md:grid-cols-4 gap-4 py-0 md:py-10">
    <!-- Dinamik menyular -->
    <div v-for="parent in rootMenus" :key="parent.id" class="flex flex-col">

      <!-- Parent nomi -->
      <div class="nav-link">
        {{ parent.name }}
      </div>

      <!-- Sub menyular -->
      <div v-if="hasChildren(parent.id)" class="pl-4 flex flex-col gap-2 mt-1">
        <router-link v-for="child in getChildren(parent.id)" :key="child.id"
          :to="child.url || `/view/contant/${child.content_id}`" @click="closeDrawer"
          class="text-gray-700 text-sm hover:text-blue-500 transition">
          {{ child.name }}
        </router-link>
      </div>
    </div>
    <router-link v-for="link in staticLinks" :key="link.to" :to="link.to" @click="closeDrawer" class="nav-link">
      {{ link.label }}
    </router-link>
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

<style scoped>
  .nav-link {
    @apply text-blue-600 font-semibold text-base mb-2 rounded bg-base-200 px-2 py-1;
  }
</style>