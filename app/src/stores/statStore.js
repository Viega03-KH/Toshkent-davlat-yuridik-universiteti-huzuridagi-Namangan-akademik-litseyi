import { defineStore } from 'pinia'
import { apiService } from '@/services/all.service'

export const useStatStore = defineStore('stat', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),
  actions: {
    async loadStat(qamrov=1) {
      this.loading = true
      try {
        const res = await apiService.getStats(qamrov)
        this.items = res.data
      } catch (err) {
        this.error = err
        console.error('Stat fetch error:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
