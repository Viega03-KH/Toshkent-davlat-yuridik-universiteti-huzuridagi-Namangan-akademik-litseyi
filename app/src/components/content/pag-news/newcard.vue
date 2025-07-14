<script setup>
  import 'vue3-carousel/carousel.css'
  import Icon from '@/components/ui/Icon.vue'
  import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
  import { onMounted, watch } from 'vue'
  import { useNewsStore } from '@/stores/newStore'
  import NewSlide from './newslide.vue' // ✅ kartani import qildik

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

  onMounted(loadNews)
  watch(() => props.type, loadNews)

  const config = {
    height: 600,
    itemsToShow: 1,
    gap: 3,
    autoplay: 2500,
    wrapAround: true,
    pauseAutoplayOnHover: true,
  }
</script>

<template>
  <div v-if="newsStore.items.length" class="w-full max-w-[1400px] mx-auto">
    <Carousel v-bind="config" class="w-full">
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