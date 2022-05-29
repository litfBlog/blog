/*
 * @Author: litfa
 * @Date: 2022-03-07 19:11:52
 * @LastEditTime: 2022-04-25 19:18:58
 * @LastEditors: litfa
 * @Description: 用户模块
 * @FilePath: /blog/src/store/user.ts
 * 
 */
import { User } from './types'

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      isLogin: false,
      userName: '123',
      avatar: '',
      id: -1,
      pendant: ''
    }
  },
  actions: {
    increment(data?: User) {
      this.isLogin = data?.isLogin || this.isLogin
      this.userName = data?.userName || this.userName
      this.avatar = data?.avatar || this.avatar
      this.id = data?.id || this.id
      this.pendant = data?.pendant || this.pendant
    }
  }
})