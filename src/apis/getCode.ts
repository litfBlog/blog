/*
 * @Author: litfa
 * @Date: 2022-03-07 17:18:32
 * @LastEditTime: 2022-03-07 17:26:35
 * @LastEditors: litfa
 * @Description: 获取code
 * @FilePath: /blog/src/apis/getCode.ts
 * 
 */
import request from '@/utils/request'
export default (): any => {
  return request({
    method: 'post',
    url: 'login/getCode'
  })
}

