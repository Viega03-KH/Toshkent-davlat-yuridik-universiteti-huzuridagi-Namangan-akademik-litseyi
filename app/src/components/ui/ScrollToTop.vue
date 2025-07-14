<!-- components/ScrollToTop.vue -->
<template>
    <transition name="fade-slide">
      <a
        v-show="visible"
        @click="scrollToTop"
        class="fixed text-4xl font-extralight bottom-20 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all cursor-pointer"
      >
      <ArrowUpFromDot :size="20" :stroke-width="3" />
    </a>
    </transition>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { ArrowUpFromDot } from 'lucide-vue-next'
  
  const visible = ref(false)
  
  const toggleVisibility = () => {
    visible.value = window.scrollY > 300
  }
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', toggleVisibility)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', toggleVisibility)
  })
  </script>
  
  <style scoped>
  /* ✨ Fade + slide in from bottom */
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.3s ease;
  }
  
  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  </style>
  