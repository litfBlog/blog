/*
 * @Author: litfa
 * @Date: 2022-03-08 10:27:31
 * @LastEditTime: 2022-04-25 19:21:55
 * @LastEditors: litfa
 * @Description: 获取用户信息
 * @FilePath: /blog/src/utils/getUserInfo.ts
 * 
 */
import { useCounterStore } from '@/store/index'
import getUserInfoApi from '@/apis/getUserInfo'

export default async (): Promise<any> => {
  const store = useCounterStore()
  if (store.isLogin) {
    // 登录过的
    return store
  }
  // 没登陆
  // 有 token
  if (localStorage.getItem('token')) {
    const { data: res } = await getUserInfoApi()
    const { username: userName, avatar, id } = res.userInfo
    store.increment({ isLogin: true, userName, avatar, id })
  }
}