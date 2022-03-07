/*
 * @Author: litfa
 * @Date: 2022-03-07 17:27:26
 * @LastEditTime: 2022-03-07 17:31:24
 * @LastEditors: litfa
 * @Description: 获取小程序码
 * @FilePath: /blog/src/apis/getQRCode.ts
 * 
 */
import request from '@/utils/request'
export default (code: string): any => {
  return request({
    method: 'post',
    url: '/login/getQRCode',
    responseType: 'arraybuffer',
    data: {
      code
    }
  })
}