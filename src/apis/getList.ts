/*
 * @Author: litfa
 * @Date: 2022-03-15 18:31:55
 * @LastEditTime: 2022-03-15 18:43:26
 * @LastEditors: litfa
 * @Description: 获取首页文章列表
 * @FilePath: /blog/src/apis/getList.ts
 * 
 */
import request from '@/utils/request'

export default (offset?: number, limit?: number): any => {
  return request({
    url: '/articles/get/home',
    method: 'POST',
    data: {
      offset,
      limit
    }
  })
}