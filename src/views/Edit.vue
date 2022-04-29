<!--
 * @Author: litfa
 * @Date: 2022-03-13 16:22:44
 * @LastEditTime: 2022-04-29 15:23:52
 * @LastEditors: litfa
 * @Description: 编辑界面
 * @FilePath: /blog/src/views/Edit.vue
 * 
-->
<script lang="ts" setup>
import articlesInitApi, { initEdit as initEditApi } from '@/apis/articlesInit'
import saveApi from '@/apis/save'
import pushApi from '@/apis/push'
import uploadApi from '@/apis/upload'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElLoading } from 'element-plus'
import '@/assets/style/markdownPreview.less'

import Editior from '@/components/Editior/markdown.vue'
import UploadCover from '@/components/UploadCover.vue'

import htmlToText from '@/utils/html2text'

const route = useRoute()
const router = useRouter()

const content = ref('')
const title = ref('')
const cover = ref('')
const editior = ref<any>()
const id = ref()

let loadingInstance: any
onMounted(() => {
  loadingInstance = ElLoading.service({
    target: '.edit',
    fullscreen: false
  })
})

const initPage = async () => {
  // 发布新文章
  let data
  if (route.query.id == undefined) {
    data = await articlesInitApi()
  } else {
    // 编辑文章
    data = await initEditApi(Number(route.query.id))
  }
  const res = data.data
  if (res.status == 1) {
    id.value = res.data.id
    content.value = res.data.content || ''
    title.value = res.data.title || ''
    cover.value = res.data.cover || ''
  } else {
    ElMessage.error('数据获取失败，请稍后再试')
  }
  loadingInstance.close()
}
initPage()

const handleUploadImage = async (event: any, insertImage: any, files: any) => {
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  console.log(event, insertImage, files)
  let formdata = new FormData()
  console.log(formdata)
  formdata.append('file', files[0])

  const { data: res } = await uploadApi(formdata, id.value)

  if (res.status != 1) return ElMessage.error('图片上传失败')

  console.log(res)

  insertImage({
    url: `//${res.Location}`,
    desc: res.fileName || 'image'
  })
}

const getDesc = (): string => {
  const html = editior.value.getHTML(content.value)
  return htmlToText(html, {
    warp: false,
    length: 60
  })
}

const save = async () => {

  // 存草稿
  const { data: res } = await saveApi({
    id: id.value,
    title: title.value,
    content: content.value,
    cover: cover.value,
    desc: getDesc()
  })
  if (res.status == 1) {
    ElMessage.success('保存成功！')
  } else {
    ElMessage.success('保存失败，请稍后再试')
  }
}

const push = async () => {
  // 发布文章
  // 发布前调用保存草稿
  await save()
  const { data: res } = await pushApi({
    id: id.value,
    title: title.value,
    content: content.value,
    cover: cover.value,
    desc: getDesc()
  })
  if (res.status == 1) {
    ElMessage.success('发布成功！请等待审核')
    setTimeout(() => {
      router.push('/')
    }, 3000)
  } else {
    ElMessage.error('发布失败，请稍后再试')
  }
}

</script>

<template>
  <div class="edit">
    <el-input class="title" v-model="title" show-word-limit maxlength="40" placeholder="标题"></el-input>
    <component
      v-bind:is="Editior"
      v-model="content"
      left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code"
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
      ref="editior"
    ></component>
    <h4>设置封面</h4>
    <upload-cover :id="id" v-model:cover="cover"></upload-cover>

    <div class="buttons">
      <el-button type="success" round size="large" auto-insert-space @click="push">发布</el-button>
      <el-button type="success" plain size="large" @click="save">存草稿</el-button>
    </div>
  </div>
</template>

<style lang="less">
@import "./../assets/style/markdownPreview.less";
</style>
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
  :deep(.v-md-editor__toolbar li) {
    color: @text-color;
    &:hover {
      color: #000;
    }
  }
  :deep(.v-md-editor__menu) {
    background-color: @card-background-color;
  }
  :deep(.v-md-editor__toolbar-item--active),
  :deep(.v-md-editor__toolbar-item--active:hover) {
    background-color: #aaaa;
    // color: #000;
  }
  :dep(.v-md-editor__toolbar-item:hover) {
    color: #000 !important;
  }
  :deep(textarea) {
    background-color: @card-background-color;
    color: @text-color;
  }
  :deep(.scrollbar__wrap) {
    background-color: @card-background-color;
  }
}
.edit {
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  transition: all 0.5s;
  padding: 15px;
  background-color: @card-background-color;
}

h4 {
  margin-top: 15px;
  color: @text-color;
}

:deep(.el-input .el-input__count .el-input__count-inner) {
  background-color: @card-background-color;
  color: @text-color;
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