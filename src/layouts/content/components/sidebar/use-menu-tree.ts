import useAppStore from '@/store/app'
import { RouteRecordRaw, RouteRecordNormalized } from 'vue-router'

export function useMenuTree() {
  const router = useRouter()
  const appStore = useAppStore()

  const appRoute = computed(() => {
    return router
      .getRoutes()
      .filter((el) => el.meta.requiresAuth && el.meta.order !== undefined)
  })
  const menuVariable = reactive({
    selectedKey: ref(['l7'])
  })

  const collapsed = computed({
    get() {
      if (appStore.device === 'desktop') return appStore.menuCollapse
      return false
    },
    set(value) {
      appStore.updateSettings({ menuCollapse: value })
    }
  })

  const goto = (item: RouteRecordRaw) => {
    router.push({
      name: item.name
    })
  }

  const handleSetCollapse = (val: boolean) => {
    appStore.updateSettings({ menuCollapse: val })
  }

  const setSelectedKeys = (val: string) => {
    menuVariable.selectedKey = [val]
  }

  const menuTree = computed(() => {
    const copyRouter = JSON.parse(JSON.stringify(appRoute.value))
    copyRouter.sort((a: RouteRecordNormalized, b: RouteRecordNormalized) => {
      return (a.meta.order || 0) - (b.meta.order || 0)
    })

    function travel(_routes: RouteRecordRaw[], layer: number): RouteRecordRaw[] {
      if (!_routes) return []

      const collector = _routes.map((element) => {
        if (element.meta?.hideChildrenInMenu || !element.children) {
          element.children = []
          return element
        }

        const subItem = travel(element.children, layer + 1)

        if (subItem?.length) {
          element.children = subItem
          return element
        }
        if (layer > 1) {
          element.children = subItem
          return element
        }

        return null
      })
      return collector.filter(Boolean)
    }
    return travel(copyRouter, 0)
  })

  return {
    menuTree,
    menuVariable,
    collapsed,
    handleSetCollapse,
    setSelectedKeys,
    goto
  }
}
