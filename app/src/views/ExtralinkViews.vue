<template>
    <section class="py-10">
        <div class="mx-auto">
            <h2 class="text-xl font-bold mb-6 uppercase">{{ $t("extralink-text") }}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <a v-for="link in links" :key="link.title" :href="link.url" target="_blank"
                    class="bg-white relative p-4 flex flex-col items-center text-center hover:shadow-2xl transition group px-2 box-border border border-white hover:border-blue-400">
                    <img :src="link.logo" :alt="link.title" class="w-16 h-16 mb-4 object-contain" />
                    <p class="text-sm font-medium text-gray-800">{{ link.title }}</p>
                    <span
                        class="absolute bottom-0 left-0 h-[4px] w-full bg-blue-400 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import Gov from '@/assets/link/uzbekistan.png'
import Mygov from '@/assets/link/my.png'
import Axborot from '@/assets/link/axborot.png'
import Otm from '@/assets/link/otm.png'
import Xalq from '@/assets/link/xalq.png'
import Murojat from '@/assets/link/murojat.png'
const links = [
    {
        title: "O‘zbekiston Respublikasi Xalq ta'limi vazirligi",
        url: "https://www.uzedu.uz/",
        logo: Xalq,
    },
    {
        title: "Yagona interaktiv davlat xizmatlari portali",
        url: "https://my.gov.uz/oz",
        logo: Mygov,
    },
    {
        title: "Murojatlar bilan ishlash uchun yangi onlayn portal",
        url: "https://pm.gov.uz/",
        logo: Murojat,
    },
    {
        title: "O‘zbekiston Respublikasi hukumat portali",
        url: "https://gov.uz/",
        logo: Gov,
    },
    {
        title: "O‘zbekiston Respublikasi oliy va o‘rta maxsus ta'lim vazirligi",
        url: "https://edu.uz/",
        logo: Otm,
    },
]
</script>