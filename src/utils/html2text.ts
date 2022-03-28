/*
 * @Author: litfa
 * @Date: 2022-03-28 12:07:42
 * @LastEditTime: 2022-03-28 14:20:45
 * @LastEditors: litfa
 * @Description: html字符换提取内容文字
 * @FilePath: /blog/src/utils/html2text.ts
 * 
 */
interface options {
  warp?: boolean
  length?: number
}

/**
 * @description: 
 * @param {string} htmlString
 * @param {options} options
 * @return {string}
 */
export default (htmlString: string, options?: options): string => {
  // 创建 dom
  const div = document.createElement('div')
  // 将html字符串 放到dom里
  div.innerHTML = htmlString
  // 去除换行
  if (options?.warp == false) {
    div.innerText = div.innerText.replaceAll('\r', ' ')
  }
  // 截取长度
  if (options?.length) {
    div.innerText = div.innerText.substring(0, options.length)
  }

  return div.innerText
}