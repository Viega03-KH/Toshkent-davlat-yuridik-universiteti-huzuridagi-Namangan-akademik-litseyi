import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import i18n from './i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
AOS.init()
app.mount('#app')
