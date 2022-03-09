/*
 * @Author: litfa
 * @Date: 2022-03-08 10:27:31
 * @LastEditTime: 2022-03-09 10:36:20
 * @LastEditors: litfa
 * @Description: 获取用户信息
 * @FilePath: /blog/src/utils/getUserInfo.ts
 * 
 */
import { useStore, mapState } from 'vuex'
import getUserInfoApi from '@/apis/getUserInfo'

export default async (): Promise<any> => {
  const store = useStore()
  if (store.state.isLogin) {
    // 登录过的
    return store.state
  }
  // 没登陆
  // 有 token
  if (localStorage.getItem('token')) {
    const { data: res } = await getUserInfoApi()
    const { username: userName, avatar, id } = res.userInfo.user
    console.log(store.commit('setUserInfo', { isLogin: true, userName, avatar, id }))
    console.log(store.state)

  }
}