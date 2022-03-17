<!--
 * @Author: litfa
 * @Date: 2022-03-13 16:22:44
 * @LastEditTime: 2022-03-17 19:08:13
 * @LastEditors: litfa
 * @Description: 编辑界面
 * @FilePath: /blog/src/views/Edit.vue
 * 
-->
<script lang="ts" setup>
import articlesInitApi from '@/apis/articlesInit'
import saveApi from '@/apis/save'
import pushApi from '@/apis/push'
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
      return router.push({ query: { id: res.uuid } })
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

const save = async () => {
  let uuid = route.query.id as string
  // 存草稿
  await saveApi({
    uuid,
    contenttype: 'markdown',
    title: title.value,
    content: content.value
  })
}

const push = async () => {
  let uuid = route.query.id as string
  // 发布文章
  // 发布前调用保存草稿
  await save()
  await pushApi({ uuid })
}

</script>

<template>
  <el-input class="title" v-model="title" show-word-limit maxlength="10" placeholder="标题"></el-input>
  <component
    v-bind:is="Editior"
    v-model="content"
    left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code"
    :disabled-menus="[]"
  ></component>
  <el-button type="success" round size="large" auto-insert-space @click="push">发布</el-button>
  <el-button type="success" plain size="large" @click="save">存草稿</el-button>
</template>

<style lang="less" scoped>
.title {
  margin: 10px 0;
  font-size: 24px;
  /deep/ .el-input__inner {
    height: 50px;
    margin: 0 10px;
  }
}
.el-button.is-plain {
  border-radius: var(--el-border-radius-round);
  border-color: @primary;
}
.v-md-editor {
  max-height: 80vh;
  min-height: 500px;
  /deep/ .v-md-editor__toolbar {
    position: sticky;
    top: 70px;
    z-index: 10;
    background-color: #fff;
  }
}
</style>