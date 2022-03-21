<!--
 * @Author: litfa
 * @Date: 2022-03-18 18:41:55
 * @LastEditTime: 2022-03-21 18:12:09
 * @LastEditors: litfa
 * @Description: 上传封面
 * @FilePath: /blog/src/components/UploadCover.vue
 * 
-->
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { UploadOne } from '@icon-park/vue-next'
import uploadApi from '@/apis/upload'

const props = defineProps({
  uuid: {
    type: String,
    required: true
  }
})

const inputElement: any = ref(null)
const show = ref(true)
const src = ref('')
console.log(inputElement)

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

const error = (msg: string) => {
  console.log('err')
  show.value = false
  setTimeout(() => {
    show.value = true
  }, 0)
  ElMessage.error(msg)
}

const upload = async (files: File[]) => {
  const { uuid } = props
  let formdata = new FormData()
  formdata.append('file', files[0])

  let { data: res } = await uploadApi(formdata, uuid)
  console.log(res)
  if (res.status != 1 || res.fileStatus != 1) return ElMessage.error('上传失败')
  show.value = false
  src.value = res.path
}

</script>

<template>
  <div class="upload">
    <upload-one theme="outline" size="34" fill="#333" />
    <span>上传封面</span>
    <input type="file" ref="inputElement" id="file" @input="input" />
    <el-image v-show="!show" fit="cover" :src="src"></el-image>
  </div>
</template>

<style lang="less" scoped>
.upload {
  // width: 100%;
  width: 400px;
  margin: 10px 0;
  height: 230px;
  background-color: #fff;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  color: #333;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.13);
  span {
    font-size: 18px;
    color: #000;
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