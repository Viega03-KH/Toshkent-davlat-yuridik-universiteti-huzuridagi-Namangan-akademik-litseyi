<template>
  <div class="bg-blue-50 ">
    <div class="container mx-auto md:px-20 px-0 flex flex-wrap items-center justify-between py-2">

      <!-- Chap tomonda: aloqa ma'lumotlari -->
      <ul class="flex items-center justify-center sm:justify-between md:w-auto w-full list-none gap-2">
        <li class="flex items-center">
          <a :href="phone" class="flex items-center gap-1 text-sm hover:underline">
            <Phone :size="15" :stroke-width="0.8" />
            <span>{{ phone }}</span>
          </a>
        </li>
        <strong class="hidden md:block" ><ChevronRight :size="16" :stroke-width="0.5" /></strong>
        <li class="flex items-center">
          <a :href="telegramLink" class="flex items-center gap-1 text-sm hover:underline">
            <Send :size="15" :stroke-width="0.8" />
            <span>{{ telegramUsername }}</span>
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
import { Send, Phone, SquareLibrary, ChevronRight } from 'lucide-vue-next'
import { useContactStore } from "@/stores/contactStore"
import { onMounted, computed } from "vue"

const contactStore = useContactStore()

onMounted(() => {
  contactStore.loadContact()
})

const phone = computed(() => contactStore.items?.phone || "")
const telegramLink = computed(() => contactStore.items?.telegram_link || "")
const telegramUsername = computed(() => {
  const link = contactStore.items?.telegram_link || ""
  return link.replace("https://t.me/", "")
})
</script>
