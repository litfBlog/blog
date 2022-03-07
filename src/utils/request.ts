/*
 * @Author: litfa
 * @Date: 2022-03-07 09:58:47
 * @LastEditTime: 2022-03-07 17:20:25
 * @LastEditors: litfa
 * @Description: axios
 * @FilePath: /blog/src/utils/request.ts
 * 
 */
import axios from 'axios'

axios.defaults.baseURL = '/api'

const request = axios.create()

export default request