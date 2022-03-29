/*
 * @Author: litfa
 * @Date: 2022-03-28 12:07:42
 * @LastEditTime: 2022-03-29 14:30:14
 * @LastEditors: litfa
 * @Description: html字符换提取内容文字
 * @FilePath: /blog/src/utils/html2text.ts
 * 
 */

/**
 * @description: html字符换提取内容文字
 * @param {string} htmlString
 * @param {options} options
 * @return {string}
 */
export default (htmlString: string, { warp = true, length }: { warp: boolean, length?: number }): string => {
  // 创建 dom
  const div = document.createElement('div')
  // 将html字符串 放到dom里
  div.innerHTML = htmlString
  // 去除换行
  if (warp == false) {
    div.innerText = div.innerText.replaceAll('\r', ' ')
  }
  // 截取长度
  if (length) {
    div.innerText = div.innerText.substring(0, length)
  }

  return div.innerText
}