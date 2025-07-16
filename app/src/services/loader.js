// src/services/loader.js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

let loadingTimeout = null
let isLoading = false

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 150, // sekinroq harakat
  minimum: 0.08      // pastroq start qiymat
})

// ❗ Yordamchi: har doim 100ms kutib ishga tushadi
export const startLoading = () => {
  if (isLoading) return
  isLoading = true

  // Delay qo‘yib, birdaniga ko‘rsatmaslik (masalan: sahifa tez yuklansa)
  loadingTimeout = setTimeout(() => {
    NProgress.start()
  }, 100) // 100ms kutish
}

export const finishLoading = () => {
  clearTimeout(loadingTimeout)
  NProgress.done()
  isLoading = false
}
