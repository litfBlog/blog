/*
 * @Author: litfa
 * @Date: 2022-03-07 18:08:07
 * @LastEditTime: 2022-03-07 18:10:50
 * @LastEditors: litfa
 * @Description: 查询登录状态
 * @FilePath: /blog/src/apis/queryStatus.ts
 * 
 */
import request from '@/utils/request'
export default (code: string): any => {
  return request({
    method: 'POST',
    url: '/login/queryLoginStatus',
    data: {
      code
    }
  })
}