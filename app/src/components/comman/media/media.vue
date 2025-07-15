<script setup>
    import { useContactStore } from "@/stores/contactStore"
    import { onMounted, computed } from "vue"
    import { Facebook, Instagram, Youtube, Send } from "lucide-vue-next"

    const contactStore = useContactStore()

    onMounted(() => {
        contactStore.loadContact()
    })

    const contacts = computed(() => {
        const items = contactStore.items || {}
        return [
            {
                icon: Instagram,
                name: "Instagram",
                link: items.instagram_link,
            },
            {
                icon: Send,
                name: "Telegram",
                link: items.telegram_link?.replace("https://t.me/", ""),
            },
            {
                icon: Facebook,
                name: "Facebook",
                link: items.facebook_link,
            },
            {
                icon: Youtube,
                name: "YouTube",
                link: items.youtobe_link,
            },
        ].filter(c => !!c.link)
    })
</script>


<template>
    <div class="flex items-center justify-center md:justify-start gap-4 flex-wrap">
        <a v-for="(item, index) in contacts" :key="index"
            :href="item.name === 'Telegram' ? `https://t.me/${item.link}` : item.link" target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-white group transition-all duration-300 hover:bg-blue-400 hover:text-white shadow-sm"
            :title="item.name">
            <component :stroke-width="0.7" :is="item.icon" :size="22"
                class="transition-all duration-300 group-hover:scale-110" />
        </a>
    </div>
</template>