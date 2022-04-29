/*
 * @Author: litfa
 * @Date: 2022-03-27 20:18:30
 * @LastEditTime: 2022-04-29 14:49:37
 * @LastEditors: litfa
 * @Description: props
 * @FilePath: /blog/src/components/Card/props.ts
 * 
 */

export default {
  viewAuthor: {
    type: Boolean,
    default: true
  },
  viewShadow: {
    type: Boolean,
    default: true
  },
  id: {
    type: [String, Number]
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
  },
  commentCount: {
    type: Number
  },
  author: {
    type: Number
  }
}