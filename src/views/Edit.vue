<!--
 * @Author: litfa
 * @Date: 2022-03-13 16:22:44
 * @LastEditTime: 2022-03-14 08:29:38
 * @LastEditors: litfa
 * @Description: 编辑界面
 * @FilePath: /blog/src/views/Edit.vue
 * 
-->
<script lang="ts" setup>
import articlesInitApi from '@/apis/articlesInit'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Editior from '@/components/Editior/markdown.vue'

const route = useRoute()
const router = useRouter()

let content = ref('')
let title = ref('')

const initPage = async () => {
  let { data: res } = await articlesInitApi()
  if (res.uuid) {
    // 路由不存在id 跳转到有id的界面
    if (!route.query.id) {
      router.push({ query: { id: res.uuid } })
    }
    // 路由有id
    if (res.uuid == route.query.id) {
      // 正常情况
      content.value = res.content || ''
      title.value = res.title || ''
    } else {
      //  但与获取的不符 跳转到有id的
      alert('您有其他文章正在编辑，是否跳转')
      router.push({ query: { id: res.uuid } })
    }
  }
}
initPage()

</script>

<template>
  {{ content }}|{{ title }}
  <component
    v-bind:is="Editior"
    v-model="content"
    left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code"
    :disabled-menus="[]"
  ></component>
</template>

<style lang="less" scoped>
.v-md-editor {
  max-height: 80vh;
  min-height: 500px;
}
</style>