import { defineStore } from 'pinia'
import { apiService } from '@/services/all.service'

export const useFaqStore = defineStore('faq', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),
  actions: {
    async loadFaq() {
      this.loading = true
      try {
        const res = await apiService.getFaq()
        this.items = res.data
      } catch (err) {
        this.error = err
        console.error('Faq fetch error:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
