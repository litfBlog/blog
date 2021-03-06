/*
 * @Author: litfa
 * @Date: 2022-04-18 16:37:55
 * @LastEditTime: 2022-04-18 16:56:53
 * @LastEditors: litfa
 * @Description: 主题
 * @FilePath: /blog/src/assets/theme/index.ts
 * 
 */
import { themes } from './themes'
// 修改页面中的样式变量值
const changeStyle = (obj: any) => {
  for (const key in obj) {
    document
      .documentElement
      .style.setProperty(`--${key}`, obj[key])
  }
}
// 改变主题的方法
export const setTheme = (themeName: string): any => {
  localStorage.setItem('theme', themeName) // 保存主题到本地，下次进入使用该主题
  const themeConfig = themes[themeName]
  // 如果有主题名称，那么则采用我们定义的主题
  if (themeConfig) {
    localStorage.setItem('primaryColor', themeConfig.primaryColor) // 保存主题色到本地
    localStorage.setItem('primaryTextColor', themeConfig.primaryTextColor) // 保存文字颜色到本地
    changeStyle(themeConfig) // 改变样式
  } else {
    const themeConfig = {
      primaryColor: localStorage.getItem('primaryColor'),
      primaryTextColor: localStorage.getItem('primaryTextColor')
    }
    changeStyle(themeConfig)
  }
}
