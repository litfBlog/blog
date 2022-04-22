/*
 * @Author: litfa
 * @Date: 2022-03-14 17:52:21
 * @LastEditTime: 2022-04-22 20:48:35
 * @LastEditors: litfa
 * @Description: 发布文章
 * @FilePath: /blog/src/apis/push.ts
 * 
 */
import request from '@/utils/request'

interface data {
  id: number,
  title: string,
  content: string
  cover?: string
  desc: string
}

export default (data: data): any => {
  return request({
    method: 'POST',
    url: '/v2/articles/push',
    data: data
  })
}