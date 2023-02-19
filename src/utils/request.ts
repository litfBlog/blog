/*
 * @Author: litfa
 * @Date: 2022-03-07 09:58:47
 * @LastEditTime: 2022-05-02 14:46:02
 * @LastEditors: litfa
 * @Description: axios
 * @FilePath: /blog/src/utils/request.ts
 * 
 */
import axios from 'axios'
import router from '@/router/index'

axios.defaults.baseURL = process.env.VUE_APP_ApiBaseutl

// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token && config.headers) { // 判断token是否存在
      config.headers.Authorization = token  // 将token设置成请求头
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  config => {
    // 身份认证失败，跳转登录
    if (config.data.status == 3) {
      // 清除已过期的 token
      try {
        localStorage.removeItem('token')
      } catch {}
      router.push('/login')
    }

    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios