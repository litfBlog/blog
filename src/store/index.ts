/*
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-03-09 10:30:07
 * @LastEditors: litfa
 * @Description: vuex
 * @FilePath: /blog/src/store/index.ts
 * 
 */
import { createStore } from 'vuex'
import user from './user'

export default createStore({
  state: {
    user: {
      isLogin: true,
      userName: '',
      avatar: '',
      id: -1
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
})
