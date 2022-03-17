/*
 * @Author: litfa
 * @Date: 2022-03-14 17:35:06
 * @LastEditTime: 2022-03-14 17:55:25
 * @LastEditors: litfa
 * @Description: 保存草稿
 * @FilePath: /blog/src/apis/save.ts
 * 
 */
import request from '@/utils/request'

interface data {
  contenttype: 'markdown'
  uuid: string
  title?: string
  content?: string
}

export default (data: data): any => {
  return request({
    method: 'POST',
    url: '/articles/save',
    data: data
  })
}