<template>
  <nav v-if="rootMenus.length" class="flex items-center gap-8 h-[64px]">
    <!-- Bosh sahifa -->
    <router-link to="/" class="routerlink">
      {{ $t('Bosh sahifa') }}
    </router-link>

    <!-- Dinamik menyular -->
    <div v-for="parent in rootMenus" :key="parent.id" class="relative group flex items-center h-full">
      <router-link :to="parent.url || '#'" class="routerlink">
        {{ parent.name }}
      </router-link>

      <!-- Sub menyular (childlar) -->
      <div v-if="hasChildren(parent.id)" class="submenu">
        <ul class="bg-white shadow-xl border-t-2 border-[#0ea5e9] py-2 min-w-[190px] rounded-b-md">
          <li v-for="child in getChildren(parent.id)" :key="child.id">
            <router-link :to="child.url || `/view/contant/${child.content_id}`"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition">
              {{ child.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>


    <!-- Statik linklar -->
    <router-link to="/gallery" class="routerlink">
      {{ $t('Gallery') }}
    </router-link>
    <router-link to="/view/faq" class="routerlink">
      {{ $t('FAQ') }}
    </router-link>
    <router-link to="/contact" class="routerlink">
      {{ $t('Bog‘lanish') }}
    </router-link>
  </nav>

  <div v-else>
    <MenuSkeleton />
  </div>
</template>

<script setup>
import MenuSkeleton from '@/skeleton/menu-skeleton.vue'
import { onMounted, computed } from 'vue'
import { useMenuStore } from '@/stores/menuStore'
const menuStore = useMenuStore()
onMounted(() => {
  menuStore.loadMenu()
})
const filteredMenu = computed(() =>
  [...menuStore.items]
)
const rootMenus = computed(() =>
  filteredMenu.value.filter(item => item.parent === 0).reverse()
)
const hasChildren = (parentId) =>
  filteredMenu.value.some(item => Number(item.parent) === Number(parentId))

const getChildren = (parentId) =>
  filteredMenu.value.filter(item => Number(item.parent) === Number(parentId)).reverse()

</script>

<style scoped>
.submenu {
  @apply absolute will-change-transform left-0 top-full opacity-0 translate-y-6 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out origin-top z-50 min-w-[180px];
}

.routerlink {
  @apply flex items-center h-full text-gray-800 text-sm font-medium border-b-4 border-transparent hover:border-[#0ea5e9] transition-colors;
}
</style>