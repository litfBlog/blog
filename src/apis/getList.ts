/*
 * @Author: litfa
 * @Date: 2022-03-15 18:31:55
 * @LastEditTime: 2022-04-23 12:22:16
 * @LastEditors: litfa
 * @Description: 获取首页文章列表
 * @FilePath: /blog/src/apis/getList.ts
 * 
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export default (offset?: number, limit?: number): any => {
  return request({
    url: '/v2/articles/get/home',
    method: 'POST',
    data: {
      offset,
      limit
    }
  })
}

export const getUser = (offset?: number, limit?: number, author?: number | string): AxiosPromise => {
  return request({
    url: '/v2/articles/get/user',
    method: 'POST',
    data: {
      offset,
      limit,
      author
    }
  })
}