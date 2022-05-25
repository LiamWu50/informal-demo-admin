import { defineStore } from 'pinia'
import defaultSettings from '@/config/settings'

const useAppStore = defineStore({
  id: 'app',

  state: () => ({ ...defaultSettings }),

  getters: {
    appCurrentSetting(state: any) {
      return { ...state }
    },
    appServerMenuConfig(state: any) {
      return state.serverMenu
    }
  },

  actions: {
    updateSettings(partial: any) {
      this.$patch(partial)
    },

    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = 'dark'
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        this.theme = 'light'
        document.body.removeAttribute('arco-theme')
      }
    }
  }
})

export default useAppStore
