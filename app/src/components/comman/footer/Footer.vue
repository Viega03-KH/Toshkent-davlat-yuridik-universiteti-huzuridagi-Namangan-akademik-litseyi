<template>
  <div class="relative border-t border-b border-blue-800/20">
    <!-- Orqa fon -->
    <div class="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/5739623/pexels-photo-5739623.jpeg" class="w-full h-full object-cover"
        alt="footer background" />
      <div class="absolute inset-0 bg-blue-800/40 backdrop-blur-lg"></div>
    </div>

    <!-- Kontent -->
    <div class="relative z-10 pt-10 bg-black/10">
      <div class="container mx-auto px-4 md:px-20 flex flex-col">

        <!-- Footer row (Logo + Menu) -->
        <footer
          class="flex flex-col md:flex-row md:justify-between md:items-start items-center text-center md:text-start">
          <!-- Logo: markazda mobil, chapda desktop -->
          <div class="w-full md:w-auto justify-center md:justify-start">
            <Logo color="text-white" />
            <Media class="pt-10" />
          </div>
          <FooterMenu />
        </footer>
        <hr class="border-white/10 border-[1px] w-full" />
        <!-- Pastki matnlar -->
        <div
          class="flex flex-col py-7 md:flex-row items-center justify-between gap-2 text-white text-sm font-light text-center md:text-left">
          <p class="max-w-md">
            {{ $t('footer-top-text') }}
          </p>
          <div class="flex flex-col md:flex-row">
            <h1 class="p-2" >{{ $t('footer-top-text-2') }}</h1>
            <TopLogo />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopLogo from './top-logo.vue'
import Media from '@/components/comman/media/media.vue'
import Logo from '../navbar/logo.vue'
import FooterMenu from './footer-menu.vue'
import alimg from '@/assets/bgimg/contact.jpg'
</script>