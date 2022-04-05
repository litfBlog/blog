/*
* @Author: litfa
* @Date: 2022-04-05 16:10:37
 * @LastEditTime: 2022-04-05 16:12:25
 * @LastEditors: litfa
* @Description: 获取评论列表
 * @FilePath: /blog/src/apis/getComment.ts
* 
*/
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
export default (id: number): AxiosPromise => {
  return request({
    url: '/articles/getComment/getList',
    method: 'POST',
    data: {
      id
    }
  })
}