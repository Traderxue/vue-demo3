import "@/assets/main.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from "./i18n/index.js"

import vant from "vant"
import 'vant/lib/index.css';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(vant)
app.use(ElementPlus)
app.use(i18n)

app.use(createPinia())
app.use(router)

app.mount('#app')
