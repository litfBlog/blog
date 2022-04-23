/*
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-04-23 15:38:40
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
import MyRouterLink from '@/components/MyRouterLink/index'
import 'element-plus/theme-chalk/el-message.css'
import '@/assets/style/main.less'
import '@icon-park/vue-next/styles/index.css'

createApp(App).use(router).use(store).use(eventBus).use(MyRouterLink).mount('#app')
