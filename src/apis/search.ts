/*
* @Author: litfa
* @Date: 2022-04-30 15:57:04
 * @LastEditTime: 2022-04-30 17:44:58
 * @LastEditors: litfa
* @Description: 搜索
 * @FilePath: /blog/src/apis/search.ts
* 
*/
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export const keywords = (keyword: string): AxiosPromise => {
  return request({
    method: 'POST',
    url: '/search/keyWords/',
    data: {
      keyword
    }
  })
}

export const search = (keyword: string): AxiosPromise => {
  return request({
    method: 'POST',
    url: '/search/',
    data: {
      keyword
    }
  })
}