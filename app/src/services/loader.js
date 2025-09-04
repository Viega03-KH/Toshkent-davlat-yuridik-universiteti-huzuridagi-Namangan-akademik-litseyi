// src/services/loader.js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

let activeRequests = 0
let loadingTimeout = null

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 150,
  minimum: 0.08
})

export const startLoading = () => {
  activeRequests++
  if (activeRequests === 1) { 
    clearTimeout(loadingTimeout)
    loadingTimeout = setTimeout(() => {
      NProgress.start()
    }, 100) 
  }
}

export const finishLoading = () => {
  if (activeRequests > 0) {
    activeRequests--
    if (activeRequests === 0) {
      clearTimeout(loadingTimeout)
      NProgress.done()
    }
  }
}
