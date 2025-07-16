<script setup>
import { useLangStore } from '@/stores/langStore'
import { useMenuStore } from '@/stores/menuStore'
import { useNewsStore } from '@/stores/newStore'
import { useAconStore } from '@/stores/aconStore'
import { useEventStore } from '@/stores/eventStore'
import { useStaffStore } from '@/stores/staffStore'
import { useContentStore } from '@/stores/contentStore'

import uzFlag from '@/assets/flags/uz.svg'
import ruFlag from '@/assets/flags/ru.svg'
import enFlag from '@/assets/flags/en.svg'

const flags = {
  uz: uzFlag,
  ru: ruFlag,
  en: enFlag
}

const langs = ['uz', 'ru', 'en']

const langStore = useLangStore()
const menuStore = useMenuStore()
const newsStore = useNewsStore()
const aconStore = useAconStore()
const eventStore = useEventStore()
const staffStore = useStaffStore()
const contentStore = useContentStore()

function changeLang(lang) {
  langStore.setLang(lang)
  menuStore.loadMenu()
  newsStore.loadNews()
  aconStore.loadAcon()
  eventStore.loadEvent()
  staffStore.loadStaff()
  contentStore.loadContent()
}
</script>


<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn w-24 flex items-center justify-center gap-2">
      <img :src="flags[langStore.lang]" alt="flag" class="w-5 h-5 rounded-sm" />
      <span class="font-light" >{{ langStore.lang.toUpperCase() }}</span>
    </div>
    <ul tabindex="0" class="dropdown-content font-bold menu bg-base-100 rounded-md w-24 mt-1 z-[1] p-2 shadow-lg">
      <li v-for="l in langs" :key="l" @click="changeLang(l)">
        <a class="flex items-center gap-2">
          <img :src="flags[l]" alt="flag" class="w-5 h-5 rounded-sm" />
          <span class="font-light" >{{ l.toUpperCase() }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
