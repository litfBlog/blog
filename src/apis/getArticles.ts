/*
 * @Author: litfa
 * @Date: 2022-03-22 11:33:11
 * @LastEditTime: 2022-04-25 19:27:44
 * @LastEditors: litfa
 * @Description: 获取文章
 * @FilePath: /blog/src/apis/getArticles.ts
 * 
 */
import request from '@/utils/request'
import { useCounterStore } from '@/store/index'

export default (id: string | number): any => {

  const store = useCounterStore()
  const isLogin = store.isLogin
  return request({
    method: 'POST',
    url: !isLogin ? `/articles/getOne/${id}` : `/articles/getOne/detailed/${id}`
  })
}