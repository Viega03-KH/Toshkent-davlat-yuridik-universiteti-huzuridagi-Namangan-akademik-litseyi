<script setup>
  import { computed } from 'vue'
  import logo from '@/assets/logo/logo.png'
  import logo2 from '@/assets/logo/logo-2.png'

  const props = defineProps({
    color: {
      type: String,
      default: 'text-black'
    }
  })

  // colorga qarab logoni tanlash
  const logoSrc = computed(() => {
    return props.color === 'text-white' ? logo2 : logo
  })
</script>

<template>
  <a href="#"
    class="flex flex-col md:flex-row items-center justify-center gap-3 w-full max-w-[80%] md:max-w-[50%] md:text-start text-center">
    <img class="w-11 h-auto object-contain" :src="logoSrc" alt="logo" />
    <span :class="['text-[12px] md:text-base font-semibold uppercase leading-snug tracking-wide', color]">
      {{ $t('logo') }}
    </span>
  </a>
</template>