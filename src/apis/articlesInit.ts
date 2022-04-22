/*
 * @Author: litfa
 * @Date: 2022-03-11 16:34:52
 * @LastEditTime: 2022-04-22 18:20:09
 * @LastEditors: litfa
 * @Description: 初始化文章
 * @FilePath: /blog/src/apis/articlesInit.ts
 * 
 */
import request from '@/utils/request'
export default (): any => {
  return request({
    method: 'POST',
    url: '/v2/articles/init/add'
  })
}
