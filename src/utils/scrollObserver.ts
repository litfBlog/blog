/*
 * @Author: litfa
 * @Date: 2022-04-01 18:30:18
 * @LastEditTime: 2022-04-04 14:21:52
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /blog/src/utils/scrollObserver.ts
 * 
 */
type callBack = (scroll: boolean) => void

export default class scrollObserver {
  private el: HTMLElement | Window
  private cb: callBack
  // 添加监听
  private create() {
    console.log('creata')

    this.el.ontouchstart = () => this.cb(true)
    this.el.ontouchend = () => this.cb(false)
  }
  // 销毁（vue销毁时调用）
  destroy(): void {
    this.el.ontouchstart = null
    this.el.ontouchend = null
  }
  constructor(el: HTMLElement | Window, cb: callBack) {
    this.el = el
    this.cb = cb
    this.create()
  }
}