/*
 * @Author: litfa
 * @Date: 2022-04-01 18:30:18
 * @LastEditTime: 2022-04-02 15:44:32
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /blog/src/utils/scrollObserver.ts
 * 
 */
// interface Cb {
//   () => void;
// }
type callBack = (scroll: boolean) => void
let timeOut = -1
export default (el: HTMLElement | Window, cb: callBack): void => {
  window.onscroll = function () {
    // const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    // console.log('滚动距离' + scrollTop)
    cb(true)
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
      cb(false)
    }, 200)
  }
}