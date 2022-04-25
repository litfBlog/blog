/*
* @Author: litfa
* @Date: 2022-04-05 16:10:37
 * @LastEditTime: 2022-04-25 19:28:20
 * @LastEditors: litfa
* @Description: 获取评论列表
 * @FilePath: /blog/src/apis/getComment.ts
* 
*/
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { useCounterStore } from '@/store/index'
export default (id: number): AxiosPromise => {
  const store = useCounterStore()
  const isLogin = store.isLogin
  return request({
    url: isLogin ? '/articles/getComment/detailed/getList' : '/articles/getComment/getList',
    method: 'POST',
    data: {
      id
    }
  })
}

export const getCommentsCount = (id: number): AxiosPromise => {
  return request({
    url: '/articles/getComment/getCounts',
    method: 'POST',
    data: {
      id
    }
  })
}