import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import useAppStore from '@/store/app'
import styles from './index.module.scss'
import { useDataSource } from './use-data-source'

const Content = defineComponent({
  name: 'LayoutContent',
  setup() {
    // window.$message = useMessage()
    const { state } = useDataSource()
    // const sideKeyRef = ref()

    const appStore = useAppStore()
    const collapsed = computed(() => {
      return appStore.menuCollapse
    })

    const menuWidth = computed(() => {
      return appStore.menuCollapse ? 48 : appStore.menuWidth
    })

    const handleSetCollapsed = (val: boolean) => {
      appStore.updateSettings({ menuCollapse: val })
    }

    const paddingStyle = computed(() => {
      const width = { width: `calc(100vw - ${menuWidth.value}px)` }
      return { ...width }
    })

    return {
      collapsed,
      menuWidth,
      paddingStyle,
      ...toRefs(state),
      handleSetCollapsed
    }
  },
  render() {
    return (
      <div class={styles.layout}>
        <div class={styles['layout-header']}>
          <NavBar userDropdownOptions={this.userDropdownOptions} />
        </div>
        <div class={styles['layout-body']}>
          <a-layout-sider
            class={styles['layout-body__sider']}
            collapsed={this.collapsed}
            collapsible={true}
            width={this.menuWidth}
            hide-trigger={true}
            onCollapse={this.handleSetCollapsed}
          >
            <SideBar />
          </a-layout-sider>
          <div class={styles['layout-body__content']} style={this.paddingStyle}>
            <div class={styles['layout-body__content-box']}>
              <router-view key={this.$route.fullPath} />
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Content
