/*
 * @Author: litfa
 * @Date: 2022-03-14 17:35:06
 * @LastEditTime: 2022-04-22 18:43:11
 * @LastEditors: litfa
 * @Description: 保存草稿
 * @FilePath: /blog/src/apis/save.ts
 * 
 */
import request from '@/utils/request'

interface data {
  id: number
  title?: string
  content?: string
  cover?: string
  desc?: string
}

export default (data: data): any => {
  return request({
    method: 'POST',
    url: '/v2/articles/save',
    data: data
  })
}