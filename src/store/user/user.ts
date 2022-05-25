import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    sessionId: '',
    userInfo: {}
  }),
  persist: true,
  getters: {
    getSessionId(): string {
      return this.sessionId
    },
    getUserInfo(): any {
      return this.userInfo
    }
  },
  actions: {
    setSessionId(sessionId: string): void {
      this.sessionId = sessionId
    },
    setUserInfo(userInfo: string): void {
      this.userInfo = userInfo
    }
  }
})
