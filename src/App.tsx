import enUS from '@arco-design/web-vue/es/locale/lang/en-us'

const App = defineComponent({
  name: 'App',
  setup() {
    const isRouterAlive = ref(true)

    const reload = () => {
      isRouterAlive.value = false
      nextTick(() => {
        isRouterAlive.value = true
      })
    }

    provide('reload', reload)

    return {
      isRouterAlive,
      reload
    }
  },
  render() {
    return (
      <a-config-provider locale={enUS}>
        {this.isRouterAlive ? <router-view /> : ''}
      </a-config-provider>
    )
  }
})

export default App
