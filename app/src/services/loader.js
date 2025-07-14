// src/services/loader.js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false,     // Pastdagi spinnerni o‘chiradi
  trickleSpeed: 100,      // Animatsiya tezligi
  minimum: 0.1,           // Boshlanishdagi progress qiymati
})

export const startLoading = () => NProgress.start()
export const finishLoading = () => NProgress.done()
