/*
 * @Author: litfa
 * @Date: 2022-04-26 20:26:10
 * @LastEditTime: 2022-04-26 20:27:43
 * @LastEditors: litfa
 * @Description: 举报
 * @FilePath: /blog/src/apis/report.ts
 * 
 */
import request from '@/utils/request'
export default (data: { type: 'articles' | 'user' | 'comment', reportId: number, cause: number, note: string }): any => {
  return request({
    method: 'POST',
    url: '/report',
    data
  })
}