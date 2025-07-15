<script setup>
import 'vue3-carousel/carousel.css'
import Icon from '@/components/ui/Icon.vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { onMounted, watch, ref } from 'vue'
import { useNewsStore } from '@/stores/newStore'
import NewSlide from './newslide.vue'

const props = defineProps({
  type: {
    type: Number,
    default: 1
  }
})

const newsStore = useNewsStore()

const loadNews = () => {
  newsStore.loadNews(props.type)
}

onMounted(() => {
  loadNews()
  updateAutoplay()
  window.addEventListener('resize', updateAutoplay)
})

watch(() => props.type, loadNews)

const autoplay = ref(2500) // default autoplay

function updateAutoplay() {
  const screenWidth = window.innerWidth
  if (screenWidth <= 768) {
    autoplay.value = 7000 // mobil uchun sekinroq
  } else {
    autoplay.value = 2000 // desktop uchun tezroq
  }
}

const config = ref({
  height: 600,
  itemsToShow: 1,
  gap: 3,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  autoplay: autoplay.value,
})

// autoplay dinamik o‘zgarishi uchun kuzatuvchi
watch(autoplay, (newVal) => {
  config.value.autoplay = newVal
})
</script>


<template>
  <div v-if="newsStore.items.length" class="w-full max-w-[1400px] mx-auto">
    <Carousel v-bind="config" class="w-full" :touch-drag="false" :mouse-drag="false" >
      <Slide v-for="item in newsStore.items.filter(i => i.type === 1).slice(0, 8)" :key="item.id" class="w-full z-0">
        <NewSlide :item="item" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>

  <!-- Skeleton loader -->
  <div v-else class="relative w-full h-[600px] animate-pulse flex flex-col justify-end rounded-md">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    <div class="absolute top-0 left-0 right-0 p-2 flex justify-between items-center">
      <div class="h-6 w-24 skeleton rounded"></div>
      <div class="h-6 w-20 skeleton rounded"></div>
    </div>
    <main class="relative py-10 px-5">
      <div class="h-8 w-2/3 skeleton rounded"></div>
    </main>
  </div>
</template>

<style>
.carousel {
  --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
  --vc-pgn-active-color: rgba(255, 255, 255, 1);
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

.carousel__next {
  background: rgba(0, 0, 0, 0.548);
  border-top-left-radius: 50%;
  border-radius: 50%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 35px;
  height: 35px;
  color: white;
}

.carousel__prev {
  background: rgba(0, 0, 0, 0.548);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  width: 35px;
  height: 35px;
  color: white;
}

.carousel__next:hover,
.carousel__prev:hover {
  color: aliceblue;
}
</style>