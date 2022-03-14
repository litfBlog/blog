/*
 * @Author: litfa
 * @Date: 2022-03-14 17:52:21
 * @LastEditTime: 2022-03-14 17:55:22
 * @LastEditors: litfa
 * @Description: 发布文章
 * @FilePath: /blog/src/apis/push.ts
 * 
 */
import request from '@/utils/request'

interface data {
  uuid: string
}

export default (data: data): any => {
  return request({
    method: 'POST',
    url: '/articles/push',
    data: data
  })
}