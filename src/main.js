import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'swiper/swiper-bundle.css';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
//使用vue-router插件
app.use(router)
  
app.mount('#app')
