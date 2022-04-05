/*
 * @Author: litfa
 * @Date: 2022-04-05 19:09:49
 * @LastEditTime: 2022-04-05 19:21:35
 * @LastEditors: litfa
 * @Description: props
 * @FilePath: /blog/src/components/Comments/SendComment/props.ts
 * 
 */
export default {
  title: {
    type: String,
    default: '评论'
  },
  placeholder: {
    type: String,
    default: '输入评论'
  },
  father: {
    type: Number,
    default: 0
  },
  parent: {
    type: Number,
    default: 0
  }
}