import { defineStore } from 'pinia'
import { apiService } from '@/services/all.service'

export const useContactStore = defineStore('contact', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),
  actions: {
    async loadContact() {
      this.loading = true
      try {
        const res = await apiService.getContact()
        this.items = res.data
      } catch (err) {
        this.error = err
        console.error('Contact fetch error:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
