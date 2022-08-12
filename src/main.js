import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/index.scss'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(router).use(store).use(Antd).mount('#app')
