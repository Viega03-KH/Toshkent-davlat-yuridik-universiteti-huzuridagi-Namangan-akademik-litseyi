import { defineStore } from 'pinia'
import { apiService } from '@/services/all.service'

export const useContentStore = defineStore('content', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),

  actions: {
    async loadContent(id) {
      this.loading = true
      this.error = null
      try {
        const res = await apiService.getContent(id)
        // Agar API bir dona object qaytarsa (ya'ni { id: 5, name: "...", ... })
        this.items = Array.isArray(res.data) ? res.data : [res.data]
      } catch (err) {
        this.error = err
        console.error('Content fetch error:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
