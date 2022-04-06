/*
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-04-06 18:40:03
 * @LastEditors: litfa
 * @Description: main.ts
 * @FilePath: /blog/src/main.ts
 * 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from 'vue3-eventbus'
import 'element-plus/theme-chalk/el-message.css'
import '@/assets/style/main.less'
import '@icon-park/vue-next/styles/index.css'

createApp(App).use(store).use(router).use(eventBus).mount('#app')
