/*
 * @Author: litfa
 * @Date: 2022-04-05 15:51:34
 * @LastEditTime: 2022-04-06 18:59:28
 * @LastEditors: litfa
 * @Description: props
 * @FilePath: /blog/src/components/Comments/CommentItem/props.ts
 * 
 */
export default {
  id: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  father: {
    type: Number
  },
  parent: {
    type: Number
  },
  children: {
    type: Array
  },
  date: {
    type: String
  }
}