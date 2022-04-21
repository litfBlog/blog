/*
 * @Author: litfa
 * @Date: 2022-04-21 14:28:02
 * @LastEditTime: 2022-04-21 14:30:57
 * @LastEditors: litfa
 * @Description: 获取友链
 * @FilePath: /blog/src/apis/getFriendLink.ts
 * 
 */
import request from '@/utils/request'

export const getHomeLink = (): Promise<any> => {
  return request({
    url: '/friendLink/getHomeLink'
  })
}

export const getAllLink = (): Promise<any> => {
  return request({
    url: '/friendLink/getAllLink'
  })
}