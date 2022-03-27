/*
 * @Author: litfa
 * @Date: 2022-03-27 20:18:30
 * @LastEditTime: 2022-03-27 20:36:35
 * @LastEditors: litfa
 * @Description: props
 * @FilePath: /blog/src/components/Card/props.ts
 * 
 */

export default {
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  username: {
    type: String
  },
  date: {
    type: [Number, String]
  },
  title: {
    type: String
  },
  desc: {
    type: String
  },
  cover: {
    type: String
  }
}