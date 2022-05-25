import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    activeMenu?: string
    showSide?: boolean
    requiresAuth?: boolean
    auth?: string[]
    order?: number
  }
}
