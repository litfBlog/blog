/*
 * @Author: litfa
 * @Date: 2022-03-27 20:18:30
 * @LastEditTime: 2022-04-02 19:23:11
 * @LastEditors: litfa
 * @Description: props
 * @FilePath: /blog/src/components/Card/props.ts
 * 
 */

export default {
  id: {
    type: [String, Number]
  },
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
  },
  likesCount: {
    type: Number
  }
}