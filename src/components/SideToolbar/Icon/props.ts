/*
 * @Author: litfa
 * @Date: 2022-04-01 16:26:07
 * @LastEditTime: 2022-04-01 17:23:52
 * @LastEditors: litfa
 * @Description: props
 * @FilePath: /blog/src/components/SideToolbar/Icon/props.ts
 * 
 */
export default {
  icon: {
    type: String,
    required: true
  },
  count: {
    type: [Number, String]
  },
  fill: {
    type: Boolean,
    default: false
  }
}