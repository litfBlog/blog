/*
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-03-17 16:56:59
 * @LastEditors: litfa
 * @Description: main.ts
 * @FilePath: /blog/src/main.ts
 * 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/main.less'
import '@icon-park/vue-next/styles/index.css'

createApp(App).use(store).use(router).mount('#app')
