/*
 * @Author: litfa
 * @Date: 2022-03-07 09:58:47
 * @LastEditTime: 2022-03-07 18:35:57
 * @LastEditors: litfa
 * @Description: axios
 * @FilePath: /blog/src/utils/request.ts
 * 
 */
import axios from 'axios'

axios.defaults.baseURL = '/api'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    console.log(config)
    if (token && config.headers) { // 判断token是否存在
      config.headers.Authorization = token  // 将token设置成请求头
    }
    console.log(config)

    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios