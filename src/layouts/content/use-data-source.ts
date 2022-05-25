import { useUserStore } from '@/store/user/user'
// import { timezoneList } from '@/utils/timezone'

export function useDataSource() {
  const route = useRoute()
  const userStore = useUserStore()

  const renderIcon = (icon) => {
    return () => h(icon)
    // return () => h(NIcon, null, { default: () => h(icon) })
  }

  // const timezoneOptions = () =>
  //   timezoneList.map((item) => ({ label: item, value: item }))

  const userDropdownOptions: any = [
    {
      label: '切换权限',
      key: 'switchPermissions',
      icon: 'icon-tag'
    },
    {
      label: '用户中心',
      key: 'userCenter',
      icon: 'icon-user'
    },
    {
      label: '用户设置',
      key: 'userSettings',
      icon: 'icon-settings'
    },
    {
      label: '退出登录',
      key: 'logout',
      icon: 'icon-export'
    }
  ]

  const state = reactive({
    isShowSide: false,
    // timezoneOptions: timezoneOptions(),
    userDropdownOptions
    // menuOptions: [],
    // headerMenuOptions: [],
    // sideMenuOptions: []
  })

  return {
    state
    // changeHeaderMenuOptions,
    // changeMenuOption,
  }
}
