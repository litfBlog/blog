/*
 * @Author: litfa
 * @Date: 2022-04-03 15:58:05
 * @LastEditTime: 2022-04-03 16:38:14
 * @LastEditors: litfa
 * @Description: 点赞文章(后期可能合并点赞评论)
 * @FilePath: /blog/src/apis/like.ts
 * 
 */
import request from '@/utils/request'
/**
 * @description:点赞文章
 * @param {string} id 文章id
 * @param {string} type 预留类型
 * @return {*}
 */
export default (id: string, like: boolean, type?: string): Promise<any> => {
  return request({
    url: '/articles/like',
    method: 'POST',
    data: {
      id,
      like
    }
  })
}