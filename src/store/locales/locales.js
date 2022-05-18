import { defineStore } from 'pinia'

export const useLocalesStore = defineStore({
  id: 'locales',
  state: () => ({
    locales: 'zh_CN'
  }),
  persist: true,
  getters: {
    getLocales() {
      return this.locales
    }
  },
  actions: {
    setLocales(lang) {
      this.locales = lang
    }
  }
})
