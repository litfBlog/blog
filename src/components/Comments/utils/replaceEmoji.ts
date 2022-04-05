/*
 * @Author: litfa
 * @Date: 2022-04-05 17:30:26
 * @LastEditTime: 2022-04-05 18:52:28
 * @LastEditors: litfa
 * @Description: 替换emoji
 * @FilePath: /blog/src/components/Comments/utils/replaceEmoji.ts
 * 
 */
import xss from 'xss'
import emojiUrl from '@/utils/emojiList'
/**
 * @description: 替换emoji
 * @param {string} content 文本内容
 * @param {string} emojiList emoji列表
 * @param {string} imgUrl
 * @return {*}
 */
export default (content: string, emojiList: string[]): string => {
  content = xss(content, {
    whiteList: {}
  })
  console.log(content)
  emojiList.forEach(emoji => {
    content = content.replaceAll(`[${emoji}]`, `<img src="${emojiUrl[emoji]}" alt="[${emoji}]" />`)
  })
  return content
}