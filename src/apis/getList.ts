/*
 * @Author: litfa
 * @Date: 2022-03-15 18:31:55
 * @LastEditTime: 2022-03-29 21:01:14
 * @LastEditors: litfa
 * @Description: 获取首页文章列表
 * @FilePath: /blog/src/apis/getList.ts
 * 
 */
import request from '@/utils/request'

export default (offset?: number, limit?: number, author?: number | string): any => {
  return request({
    url: author ? '/articles/get/home' : '/articles/get/user',
    method: 'POST',
    data: {
      offset,
      limit,
      author
    }
  })
}