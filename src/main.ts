/*
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-03-21 08:44:52
 * @LastEditors: litfa
 * @Description: main.ts
 * @FilePath: /blog/src/main.ts
 * 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/theme-chalk/el-message.css'
import '@/assets/style/main.less'
import '@icon-park/vue-next/styles/index.css'

createApp(App).use(store).use(router).mount('#app')
