<template>
  <button onclick="my_modal_1.showModal()" class="btn text-xl w-56 justify-between px-2">
    <div class="w-[80%] bg-white rounded-lg h-[80%] flex items-center justify-center">
      <p class="text-sm font-light text-gray-500">{{ $t('search-text-1') }}</p>
    </div>
    <Search :stroke-width="0.8" />
  </button>
</template>

<script setup>
import { Search } from 'lucide-vue-next'
</script>