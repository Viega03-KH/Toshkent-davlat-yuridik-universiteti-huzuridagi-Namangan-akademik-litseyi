<template>
  <div class="bg-blue-50 ">
    <div class="container mx-auto md:px-20 px-0 flex flex-wrap items-center justify-between py-2">

      <!-- Chap tomonda: aloqa ma'lumotlari -->
      <ul class="flex items-center justify-center sm:justify-between md:w-auto w-full list-none gap-2">
        <li class="flex items-center">
          <a href="tel:+998712767651" class="flex items-center gap-1 text-sm hover:underline">
            <Phone :size="15" :stroke-width="0.8" />
            <span>+998 71 276-76-51</span>
          </a>
        </li>
        |
        <li class="flex items-center">
          <a href="mailto:info@uznpu.uz" class="flex items-center gap-1 text-sm hover:underline">
            <Mail :size="15" :stroke-width="0.8" />
            <span>info@uznpu.uz</span>
          </a>
        </li>
      </ul>


      <div class="mt-2 md:mt-0 gap-1 md:flex hidden">
        <SearchButton />
        <div class="tooltip tooltip-bottom z-50" data-tip="LAYBRARE">
          <a href="https://library-tsul.uz/" target="_blank" rel="noopener" class="btn">
            <SquareLibrary :stroke-width="0.5" />
          </a>
        </div>
        <SpecialButton />
        <Lang />
      </div>

    </div>
  </div>
</template>

<script setup>
import SearchButton from "@/components/searchbar/search-button.vue"
import SpecialButton from "@/components/special/special-button.vue"
import Lang from '@/components/selectors/lang/Lang.vue'
import { Mail, Phone, SquareLibrary } from 'lucide-vue-next'
</script>
