/*
 * @Author: litfa
 * @Date: 2022-04-21 15:11:02
 * @LastEditTime: 2022-04-21 15:12:49
 * @LastEditors: litfa
 * @Description: 添加友链
 * @FilePath: /blog/src/apis/addFriendLink.ts
 * 
 */
import request from '@/utils/request'
interface Data {
  name: string
  url: string
  desc?: string
  avatar?: string
}
export default (data: Data): Promise<any> => {
  return request({
    method: 'POST',
    url: '/friendLink/add',
    data
  })
}
