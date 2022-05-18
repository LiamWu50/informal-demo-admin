import { createApp } from 'vue'
import App from './App.jsx'
import router from './router'
import { createPinia } from 'pinia'
// import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './assets/styles/default.scss'
import '@arco-design/web-vue/dist/arco.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
// app.use(ArcoVueIcon)
app.mount('#app')
