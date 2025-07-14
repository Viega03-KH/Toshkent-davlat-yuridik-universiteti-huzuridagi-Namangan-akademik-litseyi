<template>
  <div class="relative h-auto rounded-xl overflow-hidden font-sans">
    <!-- Background image -->
    <div class="absolute inset-0 bg-cover bg-center z-0 blur-sm"
      style="background-image: url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')"></div>

    <!-- Blue gradient overlay -->
    <div class="absolute inset-0 bg-blue-800/60 z-10"></div>

    <!-- Stats content -->
    <div class="relative z-20 flex flex-col md:flex-row h-full w-full min-h-[250px]">
      <div v-for="(item, index) in stats" :key="index"
        class="flex-1 flex items-center justify-center transition-all duration-300 md:hover:flex-[2] cursor-pointer">
        <div
          class="bg-black/50 text-white flex flex-col items-center justify-center text-center rounded-md w-11/12 h-32 md:h-36 px-4 py-6 space-y-1 shadow-md">
          <div class="text-2xl md:text-3xl font-extrabold">
            {{ item.count }}
          </div>
          <div class="text-xs md:text-sm font-light tracking-wide uppercase w-[130px] md:w-[150px]">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// API'dan kelgan data (siz real API dan olasiz)
const stats = [
  { count: 14, label: "O'qituvchilar (o'rindosh)" },
  { count: 8, label: "O'qituvchilar (asosiy)" },
  { count: 20, label: "Xodimlar soni" },
  { count: 27, label: "Kontrakt asosida o'qiyotganlar" },
  { count: 156, label: "Grant asosida o'qiyotganlar" },
]
</script>
