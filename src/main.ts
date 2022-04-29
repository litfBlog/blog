/*
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-04-29 16:45:00
 * @LastEditors: litfa
 * @Description: main.ts
 * @FilePath: /blog/src/main.ts
 * 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import eventBus from 'vue3-eventbus'
import MyRouterLink from '@/components/MyRouterLink/index'
import 'element-plus/theme-chalk/el-message.css'
import '@/assets/style/main.less'
import '@icon-park/vue-next/styles/index.css'
import 'element-plus/theme-chalk/el-loading.css'

createApp(App).use(router).use(createPinia()).use(eventBus).use(MyRouterLink).mount('#app')
