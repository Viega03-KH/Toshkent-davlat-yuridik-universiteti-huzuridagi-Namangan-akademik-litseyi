<script setup>
  import searchButton from "@/components/searchbar/search-button.vue"
  import NavMenu from "./navmenu.vue"
  import TopBar from "./topbar.vue"
  import Logo from "./logo.vue"
  import { Menu } from "lucide-vue-next"
  import Lang from '@/components/selectors/lang/Lang.vue'
  import { AlignJustify } from 'lucide-vue-next'
</script>

<template>
  <!-- TopBar oddiy (scroll bilan ketadi) -->
  <TopBar />

  <!-- Sticky Header (Logo + NavMenu) -->
  <div class="md:sticky top-0 z-40 bg-blue-50 border-b border-blue-800/20 shadow-sm">
    <div class="container mx-auto px-2 md:px-20 flex flex-col">
      <!-- Logo va quote -->
      <div class="flex md:justify-between justify-center items-center gap-4 py-4">
        <Logo class="max-w-[80%] md:max-w-[50%]" />
        <p class="hidden md:flex"></p>
      </div>

      <!-- NavMenu va toggle button -->
      <div class="flex md:w-auto md:py-0 py-1 w-full border-t border-blue-800/20 justify-between md:items-center"
        id="menu">
        <div class="hidden md:flex">
          <NavMenu />
        </div>
        <label for="my-drawer" class="btn drawer-button">
          <AlignJustify :size="20" :stroke-width="1" />
        </label>
        <div class="md:hidden flex gap-1">
          <searchButton />
        </div>
      </div>
    </div>
  </div>
</template>