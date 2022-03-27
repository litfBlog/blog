/*
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-03-22 11:05:30
 * @LastEditors: litfa
 * @Description: router
 * @FilePath: /blog/src/router/index.ts
 * 
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () =>
      import(/* webpackChunkName: "edit" */ '@/views/Edit.vue')
  },
  {
    path: '/p/:id',
    name: 'Page',
    component: () =>
      import(/* webpackChunkName: "page" */ '@/views/Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
