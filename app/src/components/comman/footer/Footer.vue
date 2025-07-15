<template>
  <div class="relative border-t border-b border-blue-800/20">
    <!-- Orqa fon -->
    <div class="absolute inset-0 z-0">
      <img src="https://cdn.pixabay.com/photo/2016/11/29/07/21/book-1868068_1280.jpg" class="w-full h-full object-cover"
        alt="footer background" />
      <div class="absolute inset-0 bg-blue-800/40 backdrop-blur-md"></div>
    </div>

    <!-- Kontent -->
    <div class="relative z-10 py-16 bg-black/10">
      <div class="container mx-auto px-4 md:px-20 flex flex-col">

        <!-- Footer row (Logo + Menu) -->
        <footer
          class="flex flex-col md:flex-row md:justify-between md:items-start items-center text-center md:text-start">
          <!-- Logo: markazda mobil, chapda desktop -->
          <div class="w-full md:w-auto flex justify-center md:justify-start">
            <Logo color="text-white" />
          </div>
          <FooterMenu />
        </footer>
        <Media class="py-2" />
        <hr class="border-white/50 w-full" />

        <!-- Pastki matnlar -->
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-2 text-white text-sm font-light text-center md:text-left">
          <p class="max-w-md">
            Barcha huquqlar himoyalangan. Saytdan olingan ma'lumotlar chop etilganda veb-saytga havola qilish majburiy.
          </p>
          <p>© Hardware and Software 2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Media from '@/components/comman/media/media.vue'
import Logo from '../navbar/logo.vue'
import FooterMenu from './footer-menu.vue'
</script>