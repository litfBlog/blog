<!--
 * @Author: litfa
 * @Date: 2022-03-18 18:41:55
 * @LastEditTime: 2022-04-22 18:45:13
 * @LastEditors: litfa
 * @Description: 上传封面
 * @FilePath: /blog/src/components/UploadCover.vue
 * 
-->
<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { UploadOne } from '@icon-park/vue-next'
import uploadApi from '@/apis/upload'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  cover: {
    type: String
  }
})

// 更新事件
const emits = defineEmits(['update:cover'])
// input dom
const inputElement: any = ref(null)

// 输入事件
const input = () => {
  const files = inputElement.value.files
  console.log(files)
  const { name, size, type } = files[0]
  // 验证类型
  if (!fileType(type)) {
    return error('文件类型有误(jpg/png/gif)')
  }
  if (size > 5242880) {
    return error('文件过大(5M)')
  }
  // 验证通过
  upload(files)
}

/**
 * @description: 验证文件类型
 * @param {*} type
 * @return {*}
 */
const fileType = (type: string): boolean => {
  return ['image/png', 'image/jpeg', 'image/gif'].indexOf(type) !== -1
}

/**
 * @description: 文件错误
 * @param {*} msg
 * @return {*}
 */
const error = (msg: string): void => {
  ElMessage.error(msg)
}

/**
 * @description: 上传图片
 * @param {*} files
 * @return {*}
 */
const upload = async (files: File[]) => {
  const { id } = props
  let formdata = new FormData()
  formdata.append('file', files[0])
  let { data: res } = await uploadApi(formdata, id, true)
  if (res.status != 1) return ElMessage.error('上传失败')
  emits('update:cover', `//${res.Location}`)
}

</script>

<template>
  <div class="upload">
    <upload-one theme="outline" size="34" fill="#333" />
    <span>上传封面</span>
    <input type="file" ref="inputElement" id="file" @input="input" />
    <el-image v-show="props.cover" fit="cover" :src="cover"></el-image>
  </div>
</template>

<style lang="less" scoped>
.upload {
  // width: 100%;
  width: 400px;
  margin: 10px 0;
  height: 230px;
  background-color: @card-background-color;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  color: @text-color;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.13);
  span {
    font-size: 18px;
    color: @text-color-line;
  }
  &::before {
    content: "选择或拖拽图片";
  }
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 11;
    opacity: 0;
  }
  .el-image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
}
</style>