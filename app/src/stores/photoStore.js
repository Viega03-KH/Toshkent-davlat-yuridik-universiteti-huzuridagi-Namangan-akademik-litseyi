import { defineStore } from 'pinia'
import { apiService } from '@/services/all.service'

export const usePhotoStore = defineStore('photo', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),
  actions: {
    async loadPhoto() {
      this.loading = true
      try {
        const res = await apiService.getPhoto()
        this.items = res.data
      } catch (err) {
        this.error = err
        console.error('Photo fetch error:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
