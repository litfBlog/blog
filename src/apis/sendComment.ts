/*
* @Author: litfa
* @Date: 2022-04-05 16:10:37
 * @LastEditTime: 2022-04-05 17:13:04
 * @LastEditors: litfa
* @Description: 发送评论
 * @FilePath: /blog/src/apis/sendComment.ts
* 
*/
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
export default (id: number, content: string): AxiosPromise => {
  return request({
    url: '/articles/sendComment/add',
    method: 'POST',
    data: {
      id,
      content
    }
  })
}