<!--
 * @Author: litfa
 * @Date: 2022-03-07 08:39:21
 * @LastEditTime: 2022-04-10 17:11:15
 * @LastEditors: litfa
 * @Description: 登录
 * @FilePath: /blog/src/views/Login.vue
 * 
-->

<script lang="ts" setup>
import { onUnmounted, ref } from 'vue'
import getCodeApi from '@/apis/getCode'
import getQRCodeApi from '@/apis/getQRCode'
import queryStatusApi from '@/apis/queryStatus'
// 退出时清除循环
onUnmounted(() => {
  clearTimeout(querty)
})
const QRCode = ref('')

// 获取code
const getCode = async () => {
  let { data: res } = await getCodeApi()
  getQRCode(res.code)
}
// 直接调用
getCode()
// 获取二维码
const getQRCode = async (code: string) => {
  let { data: res } = await getQRCodeApi(code)
  QRCode.value = window.URL.createObjectURL(new Blob([res]))
  queryStatus(code)
}

// 查询登录状态
let querty: any = -1
const queryStatus = (code: string) => {
  querty = setInterval(async () => {
    let { data: res } = await queryStatusApi(code)
    // 登录成功
    if (res.loginStatus == 2) {
      // 存token
      localStorage.setItem('token', res.token)
      clearInterval(querty)
    }
  }, 1000 * 3)

}

</script>

<template>
  <div class="content">
    <div class="box">
      <div class="QRCode">
        <span>请使用微信扫一扫登录</span>
        <img :src="QRCode" />
        <span>新用户将自动注册</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    max-width: 300px;
    height: 400px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .QRCode {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      color: rgb(119, 119, 119);
    }

    img {
      width: 70%;
      margin: 5px 0;
    }
  }
}
</style>