import { createApp } from 'vue'
import router from './router'
import store from './store'
import './style.css'
import App from './App.vue'
import VueScreen from 'vue-screen'
import { useGrid } from 'vue-screen'


const ss = useGrid()

createApp(App)
.use(VueScreen, 'tailwind')
.use(router)
.use(store)
.mount('#app')
