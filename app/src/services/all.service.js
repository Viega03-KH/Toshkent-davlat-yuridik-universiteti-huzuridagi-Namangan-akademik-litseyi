import api from '@/lib/api'

export const apiService = {
  getNews(type) {
    return api.get('api/site/index', { params: { type } }) // done
  },

  getMenu() {
    return api.get('/api/site/menu') // done
  },

  getStaff() {
    return api.get('api/site/bulim')// done
  },

  getContent(id) {
    return api.get('api/site/content', { params: { id } }) // done
  },

  getDepartment() {
    return api.get('/site/kafedra')
  },

  getStats(qamrov) {
    return api.get('/site/stat', { params: { qamrov } })
  },

  getFaq() {
    return api.get('api/site/faq')
  },

  getPhoto() {
    return api.get('api/site/foto') // done
  },

  sendAppeal(data) {
    return api.post('/site/appeal', data)
  },

  getBanner() {
    return api.get('/bunner')
  },

  getLogo() {
    return api.get('/site/logo')
  },

  getContact() {
    return api.get('/site/contacts')
  }
}
