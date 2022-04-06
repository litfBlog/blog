/*
* @Author: litfa
* @Date: 2022-04-05 16:10:37
 * @LastEditTime: 2022-04-06 16:06:42
 * @LastEditors: litfa
* @Description: 发送评论
 * @FilePath: /blog/src/apis/sendComment.ts
* 
*/
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
export default (id: number, content: string, father?: number, parent?: number): AxiosPromise => {
  return request({
    url: '/articles/sendComment/add',
    method: 'POST',
    data: {
      id,
      content,
      father,
      parent
    }
  })
}