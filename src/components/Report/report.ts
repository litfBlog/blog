/*
 * @Author: litfa
 * @Date: 2022-04-27 14:39:32
 * @LastEditTime: 2022-04-27 15:38:37
 * @LastEditors: litfa
 * @Description: 举报
 * @FilePath: /blog/src/components/Report/report.ts
 * 
 */
import Report from './Report.vue'
import { h, ref, render } from 'vue'
const report = (option: { open: boolean, type: 'articles' | 'user' | 'comment', reportId: number }): void => {
  // 挂载节点
  const container = document.createElement('div')
  document.body.appendChild(container)
  // 1. 吧组件变成虚拟dom VNode
  const VNode = h(Report,
    {
      dialogTableVisible: option.open,
      reportId: option.reportId,
      type: option.type,
      onClose: () => {
        document.body.removeChild(container)
      }
    }
  )
  // 3. 调用 render 吧 VNode 渲染
  render(VNode, container)
}

export { report }