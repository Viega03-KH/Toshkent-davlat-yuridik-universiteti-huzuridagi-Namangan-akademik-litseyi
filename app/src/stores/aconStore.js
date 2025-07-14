import { defineStore } from 'pinia'
import { apiService } from '@/services/all.service' // yoki apiService faylingiz yo‘liga qarab

export const useAconStore = defineStore('acon', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),

  actions: {
    async loadAcon(type=2) {
      this.loading = true
      this.error = null
      try {
        const res = await apiService.getNews(type)
        this.items = res.data?.results || res.data || []
      } catch (err) {
        this.error = err
        console.error('Acon fetch error:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
