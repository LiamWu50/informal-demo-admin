import { defineStore } from 'pinia'

const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    darkTheme: false
  }),
  persist: true,
  getters: {
    getTheme(): boolean {
      return this.darkTheme
    }
  },
  actions: {
    setDarkTheme() {
      this.darkTheme = !this.darkTheme
      if (this.darkTheme) {
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        document.body.removeAttribute('arco-theme')
      }
    }
  }
})

export default useThemeStore
