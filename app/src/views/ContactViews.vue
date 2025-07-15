<template>
    <div>
        <div class="flex justify-between">
            <h1 class="text-2xl font-extrabold pb-6" >Bog'lanish</h1>
            <Media class="md:flex hidden" />
        </div>
        <hr class="border" >
        <section class="py-24">
            <div class="mx-auto">
                <div class="grid lg:grid-cols-2 grid-cols-1">
                    <!-- Chap taraf -->
                    <div class="lg:mb-0 mb-10">
                        <div class="relative h-full">
                            <img :src="contactbg"
                                alt="Biz bilan bog‘laning"
                                class="w-full h-full object-cover lg:rounded-l-2xl rounded-2xl shadow-2xl border" />
                            <div class="absolute bottom-0 w-full lg:p-11 p-5">
                                <div class="bg-white rounded-lg p-6 space-y-6 shadow-2xl">
                                    <!-- Telefon -->
                                    <div class="flex items-center">
                                        <Phone class="text-blue-400 w-6 h-6" />
                                        <p class="text-black text-base ml-5">{{ phone }}</p>
                                    </div>
                                    <!-- Email -->
                                    <div class="flex items-center">
                                        <Send class="text-blue-400 w-6 h-6" />
                                        <p class="text-black text-base ml-5">
                                            <a :href="telegramLink" class="hover:underline">
                                                @{{ telegramUsername }}
                                            </a>
                                        </p>
                                    </div>
                                    <!-- Manzil -->
                                    <div class="flex items-center">
                                        <MapPin class="text-blue-400 w-6 h-6" />
                                        <p class="text-black text-base ml-5">
                                            {{ location_link }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PagForm />
                </div>
            </div>
        </section>
    </div>
    <PagPhone />
</template>

<script setup>
import Media from '@/components/comman/media/media.vue'
import { Phone, Send, MapPin } from 'lucide-vue-next'
import PagForm from '@/components/content/pag-contact/pag-form.vue'
import PagPhone from '@/components/content/pag-contact/pag-phone.vue'
import { useContactStore } from "@/stores/contactStore"
import { onMounted, computed } from "vue"
import contactbg from '@/assets/bgimg/contact.jpg'
const contactStore = useContactStore()

onMounted(() => {
  contactStore.loadContact()
})

const phone = computed(() => contactStore.items?.phone || "")
const location_link = computed(() => contactStore.items?.location_link || "")
const telegramLink = computed(() => contactStore.items?.telegram_link || "")
const telegramUsername = computed(() => {
  const link = contactStore.items?.telegram_link || ""
  return link.replace("https://t.me/", "")
})
</script>