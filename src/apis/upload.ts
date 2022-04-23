/*
* @Author: litfa
* @Date: 2022-03-18 14:40:02
 * @LastEditTime: 2022-04-22 18:44:42
 * @LastEditors: litfa
 * @Description: 上传文件
 * @FilePath: /blog/src/apis/upload.ts
 * 
*/

import request from '@/utils/request'
export default (data: FormData, id: number, isCover = false): any => {
  return request({
    method: 'POST',
    url: '/articles/upload',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: data,
    params: {
      id,
      isCover
    }
  })
}