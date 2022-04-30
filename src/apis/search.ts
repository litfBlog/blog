/*
* @Author: litfa
* @Date: 2022-04-30 15:57:04
 * @LastEditTime: 2022-04-30 16:06:34
 * @LastEditors: litfa
* @Description: 搜索
 * @FilePath: /blog/src/apis/search.ts
* 
*/
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export const keywords = (keyword: string): any => {
  return request({
    method: 'POST',
    url: '/search/keyWords/',
    data: {
      keyword
    }
  })
}