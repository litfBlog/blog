<!--
 * @Author: litfa
 * @Date: 2022-03-07 08:39:21
 * @LastEditTime: 2022-03-07 17:52:15
 * @LastEditors: litfa
 * @Description: 登录
 * @FilePath: /blog/src/views/Login.vue
 * 
-->

<script lang="ts" setup>
import { ref } from 'vue'
import getCodeApi from '@/apis/getCode'
import getQRCodeApi from '@/apis/getQRCode'

const QRCode = ref('')

const getCode = async () => {
  let { data: res } = await getCodeApi()
  getQRCode(res.code)
}
getCode()
const getQRCode = async (code: string) => {
  let { data: res } = await getQRCodeApi(code)
  QRCode.value = window.URL.createObjectURL(new Blob([res]))
}

</script>

<template>
  <div class="content">
    <div class="QRCode">
      <span>请使用微信扫一扫登录</span>
      <img :src="QRCode" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .QRCode {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      color: rgb(119, 119, 119);
    }
    img {
      width: 70%;
    }
  }
}
</style>