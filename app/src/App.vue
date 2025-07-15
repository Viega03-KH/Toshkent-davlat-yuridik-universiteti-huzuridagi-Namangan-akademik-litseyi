<script setup>
import Navbar from './components/comman/navbar/navbar.vue'
import Footer from './components/comman/footer/Footer.vue'
import Drawer from './components/comman/drawer/Drawer.vue'
import SearchModal from './components/searchbar/search-modal.vue'
import ScrollToTop from './components/ui/ScrollToTop.vue'
import SpecialModal from './components/special/special-modal.vue'

</script>

<template>
  <Navbar />
  <main id="content" class="py-16 min-h-[80vh] container mx-auto px-2 md:px-20" >
    <RouterView />
  </main>
  <Footer />
  <Drawer />
  <SearchModal />
  <ScrollToTop />
  <SpecialModal />
</template>
