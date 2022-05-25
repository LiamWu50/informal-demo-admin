import App from './App'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import './assets/styles/default.scss'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(ArcoVueIcon)
app.use(pinia)
app.mount('#app')
