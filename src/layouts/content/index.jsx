import { defineComponent, onMounted, watch, toRefs, ref } from 'vue'
import { Layout, LayoutHeader, LayoutContent } from '@arco-design/web-vue'

// import { NLayout, NLayoutContent, NLayoutHeader, useMessage } from 'naive-ui'
import NavBar from './components/navbar'
import SideBar from './components/sidebar'
// import { useDataList } from './use-dataList'
// import { useLocalesStore } from '@/store/locales/locales'
// import { useRouteStore } from '@/store/route/route'
// import { useI18n } from 'vue-i18n'
// import { useRoute } from 'vue-router'

const Content = defineComponent({
  name: 'LayoutContent',
  setup() {
    // window.$message = useMessage()
    // const route = useRoute()
    // const { locale } = useI18n()
    // const localesStore = useLocalesStore()
    // const routeStore = useRouteStore()
    // const {
    //   state,
    //   changeMenuOption,
    //   changeHeaderMenuOptions,
    //   changeUserDropdown
    // } = useDataList()
    // const sideKeyRef = ref()
    // onMounted(() => {
    //   locale.value = localesStore.getLocales
    //   changeMenuOption(state)
    //   changeHeaderMenuOptions(state)
    //   getSideMenu(state)
    //   changeUserDropdown(state)
    // })
    // const getSideMenu = (state) => {
    //   const key = route.meta.activeMenu
    //   state.sideMenuOptions =
    //     state.menuOptions.filter((menu) => menu.key === key)[0]?.children ||
    //     state.menuOptions
    //   state.isShowSide = route.meta.showSide
    // }
    // watch(useI18n().locale, () => {
    //   changeMenuOption(state)
    //   changeHeaderMenuOptions(state)
    //   getSideMenu(state)
    //   changeUserDropdown(state)
    // })
    // watch(
    //   () => route.path,
    //   () => {
    //     if (route.path !== '/login') {
    //       routeStore.setLastRoute(route.path)
    //       state.isShowSide = route.meta.showSide
    //       if (route.matched[1].path === '/projects/:projectCode') {
    //         changeMenuOption(state)
    //       }
    //       getSideMenu(state)
    //       const currentSide = route.meta.activeSide
    //         ? route.meta.activeSide
    //         : route.matched[1].path
    //       sideKeyRef.value = currentSide.includes(':projectCode')
    //         ? currentSide.replace(':projectCode', route.params.projectCode)
    //         : currentSide
    //     }
    //   },
    //   { immediate: true }
    // )
    // return {
    //   ...toRefs(state),
    //   changeMenuOption,
    //   sideKeyRef
    // }
  },
  render() {
    return (
      <Layout style='height: 100%'>
        <LayoutHeader style='height: 65px'>
          {/* <NavBar
            class='tab-horizontal'
            headerMenuOptions={this.headerMenuOptions}
            localesOptions={this.localesOptions}
            timezoneOptions={this.timezoneOptions}
            userDropdownOptions={this.userDropdownOptions}
          /> */}
          <NavBar />
        </LayoutHeader>
        <Layout has-sider style='top: 65px'>
          这是侧边栏
          {/* {this.isShowSide && (
            <SideBar
              sideMenuOptions={this.sideMenuOptions}
              sideKey={this.sideKeyRef}
            />
          )} */}
          <LayoutContent
            native-scrollbar={false}
            style='padding: 16px 22px'
            contentStyle={'height: 100%'}
          >
            <router-view key={this.$route.fullPath} />
          </LayoutContent>
        </Layout>
      </Layout>
    )
  }
})

export default Content
