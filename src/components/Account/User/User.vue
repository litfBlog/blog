<!--
 * @Author: litfa
 * @Date: 2022-03-29 19:21:27
 * @LastEditTime: 2022-04-25 19:30:13
 * @LastEditors: litfa
 * @Description: 用户信息
 * @FilePath: /blog/src/components/Account/User/User.vue
 * 
-->
<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { useCounterStore } from '@/store/index'

const store = useCounterStore()

const user = computed(() => {
  return store
})
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
      <div>
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
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./user.less";
</style>