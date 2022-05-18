import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    sessionId: '',
    userInfo: {}
  }),
  persist: true,
  getters: {
    getSessionId() {
      return this.sessionId
    },
    getUserInfo() {
      return this.userInfo
    }
  },
  actions: {
    setSessionId(sessionId) {
      this.sessionId = sessionId
    },
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    }
  }
})
