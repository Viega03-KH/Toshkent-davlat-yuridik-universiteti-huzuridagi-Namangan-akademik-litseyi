import axios from 'axios'
import { startLoading, finishLoading } from '@/services/loader'

const api = axios.create({
  baseURL: 'https://admin-namal.tsul.uz/',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(config => {
  startLoading()

  const lang = localStorage.getItem('lang_id') || 'uz'
  
  config.params = config.params || {}

  config.params.lang_id = lang

  return config
}, error => {
  finishLoading()
  return Promise.reject(error)
})

api.interceptors.response.use(response => {
  finishLoading()
  return response
}, error => {
  finishLoading()
  return Promise.reject(error)
})

export default api
