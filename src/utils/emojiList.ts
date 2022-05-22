/*
 * @Author: litfa
 * @Date: 2022-04-05 18:21:14
 * @LastEditTime: 2022-04-05 18:22:11
 * @LastEditors: litfa
 * @Description: emoji列表
 * @FilePath: /blog/src/components/Comments/utils/emojiList.ts
 * 
 */
import emojis from '@/assets/emoji/list'
const emojiUrl: any = {}
emojis.forEach(async item => {
  emojiUrl[item] = require(`@/assets/emoji/${item}.png`)
})

export default emojiUrl