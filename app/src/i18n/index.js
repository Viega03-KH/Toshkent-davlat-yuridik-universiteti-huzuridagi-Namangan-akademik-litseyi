import { createI18n } from 'vue-i18n'
import uz from './local/uz.json'
import ru from './local/ru.json'
import en from './local/en.json'

const lang_id = localStorage.getItem('lang_id') || 'uz'

const i18n = createI18n({
  legacy: false,
  locale: lang_id,
  fallbackLocale: 'uz',
  globalInjection: true,
  messages: {
    uz,
    ru,
    en,
  },
})

export default i18n
