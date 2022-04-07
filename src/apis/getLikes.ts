/*
* @Author: litfa
* @Date: 2022-04-07 17:17:38
 * @LastEditTime: 2022-04-07 17:47:14
 * @LastEditors: litfa
* @Description: 获取点赞列表
 * @FilePath: /blog/src/apis/getLikes.ts
* 
*/
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
export default (limit = 30, offset = 0, id: number): any => {
  return request({
    url: '/articles/getLiks',
    method: 'POST',
    data: {
      id,
      limit,
      offset
    }
  })
}