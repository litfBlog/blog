/*
 * @Author: litfa
 * @Date: 2022-03-22 11:33:11
 * @LastEditTime: 2022-03-22 11:35:35
 * @LastEditors: litfa
 * @Description: 获取文章
 * @FilePath: /blog/src/apis/getArticles.ts
 * 
 */
import request from '@/utils/request'

export default (id: string | number): any => {
  return request({
    method: 'POST',
    url: `/articles/getOne/${id}`
  })
}