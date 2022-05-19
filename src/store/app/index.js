import { defineStore } from 'pinia'
import defaultSettings from '@/config/settings'

const useAppStore = defineStore({
  id: 'app',

  state: () => ({ ...defaultSettings }),

  getters: {
    appCurrentSetting(state) {
      return { ...state }
    },
    appDevice(state) {
      return state.device
    },
    appServerMenuConfig(state) {
      return state.serverMenu
    }
  },

  actions: {
    updateSettings(partial) {
      this.$patch(partial)
    },

    toggleTheme(dark) {
      if (dark) {
        this.theme = 'dark'
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        this.theme = 'light'
        document.body.removeAttribute('arco-theme')
      }
    },
    toggleDevice(device) {
      this.device = device
    },
    toggleMenu(value) {
      this.hideMenu = value
    }
  }
})

export default useAppStore
