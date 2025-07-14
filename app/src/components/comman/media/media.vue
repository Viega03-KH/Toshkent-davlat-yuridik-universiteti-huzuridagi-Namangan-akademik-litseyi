<script setup>
    import { Send, Instagram, Facebook, Youtube, MapPin } from "lucide-vue-next"
</script>

<template>
    <ul class="fixed bottom-[30%] left-0 z-50 flex flex-col gap-2">
        <!-- Telegram -->
        <li
            class="group w-14 hover:w-64 transition-all duration-500 overflow-hidden rounded-r-xl shadow-md bg-white border-l-4 border-transparent hover:border-[#229ED9]">
            <a href="https://t.me/yourusername" target="_blank"
                class="flex items-center gap-3 px-2 py-2 text-[#229ED9] hover:bg-[#E5F6FB] transition-colors duration-300">
                <div class="p-1 bg-[#D1F0FA] border-2 border-[#229ED9] rounded-lg">
                    <Send :size="22" :stroke-width="2"/>
                </div>
                <span class="font-light">Telegram</span>
            </a>
        </li>

        <!-- Instagram -->
        <li
            class="group w-14 hover:w-64 transition-all duration-500 overflow-hidden rounded-r-xl shadow-md bg-white border-l-4 border-transparent hover:border-pink-500">
            <a href="https://instagram.com/yourusername" target="_blank"
                class="flex items-center gap-3 px-2 py-2 text-pink-600 hover:bg-pink-50 transition-colors duration-300">
                <div class="p-1 bg-pink-100 border-2 border-pink-400 rounded-lg">
                    <Instagram :size="22" :stroke-width="2" />
                </div>
                <span class="font-light">Instagram</span>
            </a>
        </li>

        <!-- Facebook -->
        <li
            class="group w-14 hover:w-64 transition-all duration-500 overflow-hidden rounded-r-xl shadow-md bg-white border-l-4 border-transparent hover:border-blue-600">
            <a href="https://facebook.com/yourusername" target="_blank"
                class="flex items-center gap-3 px-2 py-2 text-blue-700 hover:bg-blue-50 transition-colors duration-300">
                <div class="p-1 bg-blue-100 border-2 border-blue-500 rounded-lg">
                    <Facebook :size="22" :stroke-width="2" />
                </div>
                <span class="font-light">Facebook</span>
            </a>
        </li>

        <!-- YouTube -->
        <li
            class="group w-14 hover:w-64 transition-all duration-500 overflow-hidden rounded-r-xl shadow-md bg-white border-l-4 border-transparent hover:border-red-600">
            <a href="https://youtube.com/yourchannel" target="_blank"
                class="flex items-center gap-3 px-2 py-2 text-red-600 hover:bg-red-50 transition-colors duration-300">
                <div class="p-1 bg-red-100 border-2 border-red-500 rounded-lg">
                    <Youtube :size="22" :stroke-width="2" />
                </div>
                <span class="font-light">YouTube</span>
            </a>
        </li>
        <!-- Map -->
        <li
            class="group w-14 hover:w-64 transition-all duration-500 overflow-hidden rounded-r-xl shadow-md bg-white border-l-4 border-transparent hover:border-green-600">
            <a href="https://youtube.com/yourchannel" target="_blank"
                class="flex items-center gap-3 px-2 py-2 text-green-600 hover:bg-green-50 transition-colors duration-300">
                <div class="p-1 bg-green-100 border-2 border-green-500 rounded-lg">
                    <MapPin :size="22" :stroke-width="2"/>
                </div>
                <span class="font-light">Joylashuv</span>
            </a>
        </li>
    </ul>
</template>