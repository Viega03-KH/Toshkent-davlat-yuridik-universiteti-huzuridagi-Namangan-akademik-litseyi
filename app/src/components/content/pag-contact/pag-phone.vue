<script setup>
import {PhoneCall} from 'lucide-vue-next'
import { useContactStore } from "@/stores/contactStore"
import { onMounted, computed } from "vue"

const contactStore = useContactStore()

onMounted(() => {
  contactStore.loadContact()
})

const contacts = computed(() => {
  const items = contactStore.items || {}
  return [
    { phone: items.phone_2 },
    { phone: items.phone_3 },
    { phone: items.phone_4 },
  ].filter(c => !!c.phone) 
})

</script>

<template>
    <section class="py-8 px-4">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-sm font-bold text-gray-800 lg:text-xl uppercase">{{ $t("phone-text") }}</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="(contact, index) in contacts" :key="index" class="flex items-center justify-between px-2">
                <!-- Icon -->
                <div class="bg-blue-100 p-3 rounded-full">
                    <PhoneCall :size="28" :stroke-width="0.5" />
                </div>

                <!-- Text info -->
                <div class="flex flex-col">
                    <a :href="`tel:${contact.phone}`" class="text-blue-400 italic font-extrabold text-xl md:text-4xl transition duration-700 ease-in-out hover:text-black hover:underline">
                        {{ contact.phone }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
