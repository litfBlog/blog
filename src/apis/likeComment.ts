/*
 * @Author: litfa
 * @Date: 2022-04-12 17:51:10
 * @LastEditTime: 2022-04-13 14:07:58
 * @LastEditors: litfa
 * @Description: 点赞评论
 * @FilePath: /blog/src/apis/likeComment.ts
 * 
 */
import request from '@/utils/request'
export default (id: string, like: boolean, commentId: number): Promise<any> => {
  return request({
    url: '/articles/likeComment/',
    method: 'POST',
    data: {
      id,
      like,
      commentId
    }
  })
}