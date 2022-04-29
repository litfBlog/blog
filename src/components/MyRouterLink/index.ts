/*
 * @Author: litfa
 * @Date: 2022-04-22 17:06:02
 * @LastEditTime: 2022-04-22 17:11:10
 * @LastEditors: litfa
 * @Description: install
 * @FilePath: /blog/src/components/MyRouterLink/index.ts
 * 
 */
import type { App } from 'vue'
import MyRouterLink from './MyRouterLink.vue'
export default {
  install(Vue: App): void {
    Vue.component('router-link', MyRouterLink)
  }
}