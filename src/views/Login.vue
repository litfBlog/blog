<!--
 * @Author: litfa
 * @Date: 2022-03-07 08:39:21
 * @LastEditTime: 2022-04-10 17:48:36
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
import { CheckOne } from '@icon-park/vue-next'
import getUserInfo from '@/utils/getUserInfo'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
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
const loginSuccess = ref(false)
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
      getUserInfo()
      loginSuccess.value = true
      setTimeout(() => {
        if (route.query.back) {
          router.push(route.query.back as string)
        } else {
          router.push('/')
        }
      }, 5000)
    }
  }, 1000 * 3)

}

</script>

<template>
  <div class="content">
    <div class="box">
      <div class="QRCode" v-if="!loginSuccess">
        <span>请使用微信扫一扫登录</span>
        <div class="icon">
          <img :src="QRCode" />
        </div>
        <span>新用户将自动注册</span>
      </div>
      <template v-else>
        <check-one theme="outline" fill="red" size="140" :strokeWidth="5" />
        <span>登录成功</span>
      </template>
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
    width: 300px;
    height: 400px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      font-size: 18px;
    }
  }

  .QRCode {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      color: rgb(119, 119, 119);
    }

    img {
      width: 70%;
      margin: 5px 0;
    }
  }
}

:deep(svg path) {
  stroke: @primary;
}
</style>