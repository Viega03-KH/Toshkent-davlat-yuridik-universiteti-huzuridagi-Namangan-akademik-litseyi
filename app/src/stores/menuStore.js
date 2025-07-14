import { defineStore } from 'pinia'
import { apiService } from '@/services/all.service'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),
  actions: {
    async loadMenu() {
      this.loading = true
      try {
        const res = await apiService.getMenu()
        this.items = res.data
      } catch (err) {
        this.error = err
        console.error('Menu fetch error:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
