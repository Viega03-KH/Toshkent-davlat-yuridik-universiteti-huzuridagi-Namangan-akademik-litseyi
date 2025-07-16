<template>
  <div class="mx-auto flex flex-col md:flex-row gap-12">
    <div class="flex flex-col text-center md:text-left basis-1/2">
      <p class="sm:text-4xl text-3xl font-extrabold text-base-content">{{ $t('faq-text-1') }}</p>
    </div>

    <ul v-if="faqStore.items.length" class="basis-1/2">
      <li v-for="item in faqStore.items" :key="item.id"
        class="bg-base-100 border-base-300 collapse border collapse-arrow my-2 list-none">
        <input type="checkbox" class="peer" />
        <div class="collapse-title bg-info-content text-primary-content peer-checked:bg-info peer-checked:text-black">
          <p class="font-light text-xl">{{ item.question }}</p>
        </div>
        <div class="collapse-content bg-info-content text-black peer-checked:bg-info peer-checked:text-info-content">
          <p class="font-normal text-xl">{{ item.answer }}</p>
        </div>
      </li>
    </ul>

    <ul v-else class="basis-1/2">
      <FaqSkeleton />
    </ul>
  </div>
</template>

<script setup>
import FaqSkeleton from '@/skeleton/faq-skeleton.vue'
import { onMounted } from 'vue'
import { useFaqStore } from '@/stores/faqStore'

const faqStore = useFaqStore()

onMounted(() => {
  faqStore.loadFaq()
})
</script>