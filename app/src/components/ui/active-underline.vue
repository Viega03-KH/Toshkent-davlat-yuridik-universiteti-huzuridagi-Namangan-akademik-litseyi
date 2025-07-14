<!-- components/ActiveUnderline.vue -->
<template>
    <span class="active-underline"></span>
  </template>
  
  <style scoped>
  .active-underline {
    @apply absolute bottom-0 left-0 h-[2px] w-full bg-blue-500 scale-x-0 origin-left transition-transform duration-300 ease-out;
  }
  
  /* Hover holatini ota element group orqali tutib olish */
  :deep(.group:hover) .active-underline {
    @apply scale-x-100;
  }
  </style>
  