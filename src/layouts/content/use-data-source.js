// import { useI18n } from 'vue-i18n'
// import { useRoute } from 'vue-router'
import { useUserStore } from '@/store/user/user'
// import { timezoneList } from '@/utils/timezone'

export function useDataSource() {
  // const { t } = useI18n()
  const route = useRoute()
  const userStore = useUserStore()

  const renderIcon = (icon) => {
    return () => h(icon)
    // return () => h(NIcon, null, { default: () => h(icon) })
  }

  // const localesOptions = [
  //   {
  //     label: 'English',
  //     key: 'en_US'
  //   },
  //   {
  //     label: '中文',
  //     key: 'zh_CN'
  //   }
  // ]

  // const timezoneOptions = () =>
  //   timezoneList.map((item) => ({ label: item, value: item }))

  const state = reactive({
    isShowSide: false,
    // localesOptions,
    // timezoneOptions: timezoneOptions(),
    userDropdownOptions: []
    // menuOptions: [],
    // headerMenuOptions: [],
    // sideMenuOptions: []
  })

  const changeUserDropdown = (state) => {
    state.userDropdownOptions = [
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
  }

  return {
    state,
    // changeHeaderMenuOptions,
    // changeMenuOption,
    changeUserDropdown
  }
}
