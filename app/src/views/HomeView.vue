<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-1">
    <div class="col-span-1 md:col-span-2">
      <NewCard />
    </div>
    <div class="col-span-1">
      <Acon />
    </div>
    <div class="col-span-1">
      <Event />
    </div>
  </div>

  <div class="pt-40">
    <div class="mb-6 flex items-end justify-between gap-4">
      <h2 class="text-sm font-bold text-gray-800 lg:text-xl uppercase">{{ $t('Yangiliklar') }}</h2>

      <RouterLink to="view/news" class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-sm font-medium rounded-md hover:bg-gray-200 border">{{ $t('Barchasi') }}</RouterLink>
    </div>
    <NewCardHome />
  </div>
  <StatsSection class="pt-40" />
  <Chanel class="pt-40" />
  <Carsuel class="bg-carsuel" />
  <ExtralinkViews />
  <PagPhone />
</template>


<script setup>
import Chanel from '@/components/content/pag-yutube/chanel.vue'
import PagPhone from '@/components/content/pag-contact/pag-phone.vue'
import ExtralinkViews from './ExtralinkViews.vue'
import NewCard from '@/components/content/pag-news/newcard.vue'
import Acon from '@/components/content/pag-acon/acon.vue'
import Event from '@/components/content/pag-event/event.vue'
import Carsuel from '@/components/content/pag-photo/carsuel.vue'
import NewCardHome from '@/components/content/pag-new-card/newcard.vue'
import StatsSection from '@/components/content/pag-statistik/StatsSection.vue'
</script>
