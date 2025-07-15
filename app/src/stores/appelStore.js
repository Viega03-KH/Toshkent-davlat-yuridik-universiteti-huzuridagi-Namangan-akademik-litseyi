import { defineStore } from 'pinia'
import { apiService } from '@/services/all.service'

export const useAppelStore = defineStore('appel', {
  state: () => ({
    loading: false,
    success: false,
    error: null,
  }),
  actions: {
    async sendAppeal(payload) {
      this.loading = true
      this.error = null
      this.success = false

      try {
        await apiService.sendAppeal(payload)
        this.success = true
      } catch (err) {
        this.error = err?.response?.data || 'Xatolik yuz berdi'
        console.error('Appeal POST error:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
