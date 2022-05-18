import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import useAppStore from '@/store/app'
import styles from './index.module.scss'
import { useDataSource } from './use-data-source'
// import { useLocalesStore } from '@/store/locales/locales'
// import { useRouteStore } from '@/store/route/route'
// import { useI18n } from 'vue-i18n'

const Content = defineComponent({
  name: 'LayoutContent',
  setup() {
    // window.$message = useMessage()
    // const route = useRoute()
    // const { locale } = useI18n()
    // const localesStore = useLocalesStore()
    // const routeStore = useRouteStore()
    const { state, changeUserDropdown } = useDataSource()
    // const sideKeyRef = ref()
    onMounted(() => {
      // locale.value = localesStore.getLocales
      // changeMenuOption(state)
      // changeHeaderMenuOptions(state)
      // getSideMenu(state)
      changeUserDropdown(state)
    })
    // watch(useI18n().locale, () => {
    //   changeMenuOption(state)
    //   changeHeaderMenuOptions(state)
    //   getSideMenu(state)
    //   changeUserDropdown(state)
    // })
    const appStore = useAppStore()
    const collapsed = computed(() => {
      return appStore.menuCollapse
    })

    const menuWidth = computed(() => {
      return appStore.menuCollapse ? 48 : appStore.menuWidth
    })

    const handleSetCollapsed = (val) => {
      appStore.updateSettings({ menuCollapse: val })
    }

    return {
      collapsed,
      menuWidth,
      ...toRefs(state),
      handleSetCollapsed
    }
  },
  render() {
    return (
      <a-layout class={styles.layout}>
        <a-layout-header class={styles['layout-header']}>
          <NavBar userDropdownOptions={this.userDropdownOptions} />
        </a-layout-header>
        <a-layout>
          <a-layout>
            <a-layout-sider
              class={styles['layout-sider']}
              collapsed={this.collapsed}
              collapsible={true}
              width={this.menuWidth}
              style={{ paddingTop: '60px' }}
              hide-trigger={true}
              onCollapse={this.handleSetCollapsed}
            >
              <SideBar />
            </a-layout-sider>
            <a-layout>
              <a-layout-content class={styles['layout-content']}>
                <router-view key={this.$route.fullPath} />
              </a-layout-content>
            </a-layout>
          </a-layout>
        </a-layout>
      </a-layout>
    )
  }
})

export default Content
