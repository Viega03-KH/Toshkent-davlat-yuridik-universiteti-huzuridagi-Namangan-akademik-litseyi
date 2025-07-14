import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLangStore = defineStore('lang', () => {
  const { locale } = useI18n()
  const lang = ref(localStorage.getItem('lang_id') || 'uz')

  // locale va localStorage bilan sinxronlashtirish
  watch(lang, (newLang) => {
    locale.value = newLang
    localStorage.setItem('lang_id', newLang)
  }, { immediate: true })

  const setLang = (value) => {
    lang.value = value
  }

  return { lang, setLang }
})
