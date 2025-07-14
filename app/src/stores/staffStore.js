import { defineStore } from 'pinia'
import { apiService } from '@/services/all.service' // yoki apiService faylingiz yo‘liga qarab

export const useStaffStore = defineStore('staff', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),

  actions: {
    async loadStaff() {
      this.loading = true
      this.error = null
      try {
        const res = await apiService.getStaff()
        this.items = res.data?.results || res.data || []
      } catch (err) {
        this.error = err
        console.error('Staff fetch error:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
