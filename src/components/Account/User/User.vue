<!--
 * @Author: litfa
 * @Date: 2022-03-29 19:21:27
 * @LastEditTime: 2022-04-29 17:17:42
 * @LastEditors: litfa
 * @Description: 用户信息
 * @FilePath: /blog/src/components/Account/User/User.vue
 * 
-->
<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { useCounterStore } from '@/store/index'
import { ElMessageBox, ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message-box.css'
import { useRouter } from 'vue-router'

const store = useCounterStore()
const router = useRouter()

const user = computed(() => {
  return store
})

const logout = () => {
  ElMessageBox.confirm('确定要退出吗', '退出登录').then(() => {
    localStorage.removeItem('token')
    ElMessage.success('退出成功')
    setTimeout(() => {
      router.push('/')
    }, 1000)
  })
}
</script>

<template>
  <div class="User">
    <div class="userInfo">
      <div class="avatar">
        <el-image :src="user.avatar" fit="cover"></el-image>
      </div>
      <div class="text">
        <span class="name">{{ user.userName }}</span>
        <span>uid: {{ user.id }}</span>
      </div>
    </div>
    <div class="data">
      <!-- <div>
        <span>粉丝</span>
        <span>12731</span>
      </div>
      <div>
        <span>粉丝</span>
        <span>12731</span>
      </div>
      <div>
        <span>粉丝</span>
        <span>12731</span>
      </div>-->
      <el-button @click="logout">退出登录</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./user.less";
</style>

<style>
.el-message-box {
  width: calc(100% - 40px);
  max-width: 500px;
}
</style>