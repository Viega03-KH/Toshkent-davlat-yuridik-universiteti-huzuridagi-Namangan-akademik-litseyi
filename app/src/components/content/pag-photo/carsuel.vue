<template>
    <main class="pt-16">
        <!-- Hero Section -->
        <section class="container mx-auto py-12 md:py-24">
            <div class="flex flex-col md:flex-row items-center justify-between">
                <!-- Left Side: Company Info -->
                <div class="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 class="text-4xl md:text-3xl font-bold text-black leading-tight mb-4 uppercase italic">
                        {{ $t("photo-text-1") }}
                    </h1>
                    <p class="text-2xl font-light text-blue-600 mb-6 italic">
                        {{ $t("photo-text-2") }}
                    </p>
                    <router-link to="/gallery"
                        class="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md">
                        {{ $t("photo-text-3") }}
                    </router-link>

                </div>
                <!-- Right xSide: Details and Buttons -->
                <div class="w-full md:w-[40%] h-[60vh]">
                    <div v-if="photoStore.loading" class="text-center text-white"></div>
                    <div v-else>
                        <!-- Asosiy rasm slider -->
                        <Carousel v-bind="galleryConfig" v-model="currentSlide">
                            <Slide v-for="image in photoStore.items" :key="image.id">
                                <img :src="image.url" :alt="image.title" class="rounded-lg" />
                            </Slide>
                        </Carousel>

                        <!-- Thumbnail slider -->
                        <Carousel v-bind="thumbnailsConfig" v-model="currentSlide" class="mt-4">
                            <Slide v-for="(image, index) in photoStore.items" :key="image.id">
                                <template #default="{ currentIndex, isActive }">
                                    <div :class="['thumbnail', { 'is-active': isActive }]" @click="slideTo(index)">
                                        <img :src="image.url" :alt="image.title" class="rounded-lg h-20" />
                                    </div>
                                </template>
                            </Slide>
                            <template #addons>
                                <Navigation />
                            </template>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script setup>
    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide, Navigation } from 'vue3-carousel'
    import { ref, onMounted } from 'vue'
    import { usePhotoStore } from '@/stores/photoStore'

    const photoStore = usePhotoStore()
    const currentSlide = ref(0)

    onMounted(() => {
        photoStore.loadPhoto()
    })

    const slideTo = (index) => {
        currentSlide.value = index
    }

    const galleryConfig = {
        itemsToShow: 1,
        wrapAround: true,
        autoplay: 4000,
        slideEffect: 'fade',
        mouseDrag: false,
        touchDrag: false,
    }

    const thumbnailsConfig = {
        height: 80,
        itemsToShow: 5,
        wrapAround: true,
        touchDrag: false,
        gap: 1,
    }
</script>