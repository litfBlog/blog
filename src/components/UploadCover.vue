<!--
 * @Author: litfa
 * @Date: 2022-03-18 18:41:55
 * @LastEditTime: 2022-03-21 17:32:48
 * @LastEditors: litfa
 * @Description: 上传封面
 * @FilePath: /blog/src/components/UploadCover.vue
 * 
-->
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { UploadOne } from '@icon-park/vue-next'

const inputElement: any = ref(null)
const show = ref(true)
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

</script>

<template>
  <div class="upload">
    <upload-one theme="outline" size="34" fill="#333" />
    <span>上传封面</span>
    <input type="file" ref="inputElement" id="file" @input="input" v-if="show" />
    <el-image v-show="!show" cover></el-image>
  </div>
</template>

<style lang="less" scoped>
.upload {
  width: 100%;
  margin: 10px 0;
  height: 180px;
  background-color: #fff;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  color: #333;
  position: relative;
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
    opacity: 0;
  }
}
</style>