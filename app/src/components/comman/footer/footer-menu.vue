<template>
    <div v-if="rootMenus.length" class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Dinamik menyular -->
        <div v-for="parent in rootMenus.slice(0, 4)" :key="parent.id" class="flex flex-col">

            <!-- Parent nomi -->
            <div class="block uppercase text-sm font-semibold mb-2 text-white ">
                {{ parent.name }}
            </div>

            <!-- Sub menyular -->
            <ul class="list-unstyled" v-if="hasChildren(parent.id)" >
                <router-link v-for="child in getChildren(parent.id).slice(0, 5)" :key="child.id"
                    :to="child.url || `/view/contant/${child.content_id}`" @click="closeDrawer"
                    class="font-lingth text-white link-hover block pb-2 text-md">
                    {{ child.name }}
                </router-link>
            </ul>
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