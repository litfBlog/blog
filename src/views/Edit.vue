<!--
 * @Author: litfa
 * @Date: 2022-03-13 16:22:44
 * @LastEditTime: 2022-04-18 18:22:50
 * @LastEditors: litfa
 * @Description: 编辑界面
 * @FilePath: /blog/src/views/Edit.vue
 * 
-->
<script lang="ts" setup>
import articlesInitApi from '@/apis/articlesInit'
import saveApi from '@/apis/save'
import pushApi from '@/apis/push'
import uploadApi from '@/apis/upload'
import { onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

import Editior from '@/components/Editior/markdown.vue'
import UploadCover from '@/components/UploadCover.vue'

import htmlToText from '@/utils/html2text'

const route = useRoute()
const router = useRouter()

let content = ref('')
let title = ref('')
let cover = ref('')
let editior = ref<any>()

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
      cover.value = res.cover || ''
    } else {
      //  但与获取的不符 跳转到有id的
      alert('您有其他文章正在编辑，是否跳转')
      router.push({ query: { id: res.uuid } })
    }
  }
}

watch(() => route.query.id, (e) => {
  // 解决跳转回其他页面时触发
  if (route.name != 'Edit') return
  initPage()
}, {
  immediate: true
})

const handleUploadImage = async (event: any, insertImage: any, files: any) => {
  let uuid = route.query.id as string
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  console.log(event, insertImage, files)
  let formdata = new FormData()
  console.log(formdata)
  formdata.append('file', files[0])

  let { data: res } = await uploadApi(formdata, uuid)

  if (res.status != 1) return ElMessage.error('图片上传失败')

  if (res.fileStatus != 1) {
    switch (res.fileStatus) {
      case 1:
        break
      case 2:
        ElMessage.error('文件过大/过小')
        break
      case 3:
        ElMessage.error('暂不支持该文件类型')
        break
      default:
        break
    }
    return
  }

  // 此处只做示例
  insertImage({
    url: res.path,
    desc: res.fileName || 'image'
  })
}

const save = async () => {
  let uuid = route.query.id as string
  const html = editior.value.getHTML(content.value)
  const desc = htmlToText(html, {
    warp: false,
    length: 60
  })

  // 存草稿
  await saveApi({
    uuid,
    contenttype: 'markdown',
    title: title.value,
    content: content.value,
    cover: cover.value,
    desc
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
  <div class="edit">
    <el-input class="title" v-model="title" show-word-limit maxlength="10" placeholder="标题"></el-input>
    <component
      v-bind:is="Editior"
      v-model="content"
      left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code"
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
      ref="editior"
    ></component>
    <h4>设置封面</h4>
    <upload-cover :uuid="(route.query.id as string)" v-model:cover="cover"></upload-cover>

    <div class="buttons">
      <el-button type="success" round size="large" auto-insert-space @click="push">发布</el-button>
      <el-button type="success" plain size="large" @click="save">存草稿</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.title {
  margin: 10px 0;
  font-size: 24px;
  :deep(.el-input__inner) {
    height: 50px;
  }
}

.buttons {
  margin-top: 10px;
}
.el-button.is-plain {
  border-radius: var(--el-border-radius-round);
  border-color: @primary;
}
.v-md-editor {
  max-height: 80vh;
  min-height: 500px;
  :deep(.v-md-editor__toolbar) {
    position: sticky;
    top: 70px;
    z-index: 10;
    background-color: @card-background-color;
  }
}
.edit {
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  transition: all 0.5s;
}

h4 {
  margin-top: 15px;
}

@media screen and (max-width: 1040px) {
  .edit {
    padding: 0 20px;
  }
}
@media screen and (max-width: 500px) {
  .edit {
    padding: 0;
  }
}
</style>