import useAppStore from '@/store/app'

export function useMenuTree() {
  const router = useRouter()
  const appStore = useAppStore()

  const appRoute = computed(() => {
    return router
      .getRoutes()
      .filter((el) => el.meta.requiresAuth && el.meta.order !== undefined)
  })
  const menuVariable = reactive({
    selectedKey: ref([])
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

  const goto = (item) => {
    router.push({
      name: item.name
    })
  }

  const handleSetCollapse = (val) => {
    appStore.updateSettings({ menuCollapse: val })
  }

  const menuTree = computed(() => {
    const copyRouter = JSON.parse(JSON.stringify(appRoute.value))
    copyRouter.sort((a, b) => {
      return (a.meta.order || 0) - (b.meta.order || 0)
    })

    function travel(_routes, layer) {
      if (!_routes) return null

      const collector = _routes.map((element) => {
        if (element.meta?.hideChildrenInMenu || !element.children) {
          element.children = []
          return element
        }

        const subItem = travel(element.children, layer + 1)

        if (subItem.length) {
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
    goto
  }
}
