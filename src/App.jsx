import { defineComponent, ref, nextTick, provide } from 'vue'
import { ConfigProvider } from '@arco-design/web-vue'
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
      <ConfigProvider locale={enUS}>
        {this.isRouterAlive ? <router-view /> : ''}
      </ConfigProvider>
    )
  }
})

export default App
