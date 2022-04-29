/*
 * @Author: litfa
 * @Date: 2022-04-22 15:35:49
 * @LastEditTime: 2022-04-26 17:08:31
 * @LastEditors: litfa
 * @Description: 平滑滚动
 * @FilePath: /blog/src/utils/scrollIntoView.ts
 * 
 */
export default async (traget: string, offset = -100): Promise<void> => {
  const tragetElem = document.querySelector(traget) as HTMLElement

  if (!tragetElem) return
  const tragetElemPostition = tragetElem.offsetTop + offset

  // 当前滚动高度
  let scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop
  // 滚动step方法
  const step = function () {
    // 距离目标滚动距离
    const distance = tragetElemPostition - scrollTop

    // 目标需要滚动的距离，也就是只走全部距离的五分之一
    scrollTop = scrollTop + distance / 5
    if (Math.abs(distance) < 1) {
      window.scrollTo(0, tragetElemPostition)
    } else {
      window.scrollTo(0, scrollTop)
      setTimeout(step, 20)
    }
  }
  step()
}