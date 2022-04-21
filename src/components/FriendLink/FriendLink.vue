<!--
 * @Author: litfa
 * @Date: 2022-04-20 19:50:59
 * @LastEditTime: 2022-04-21 14:23:15
 * @LastEditors: litfa
 * @Description: 友链列表
 * @FilePath: /blog/src/components/FriendLink/FriendLink.vue
 * 
-->
<script lang="ts" setup>
import FriendLinkItem from '../FriendLinkItem/FriendLinkItem.vue'
</script>

<template>
  <h1>小伙伴们</h1>
  <div class="list">
    <friend-link-item
      v-for="(item, index) in 10"
      :key="index"
      name="name"
      desc="desc"
      avatar="http"
    ></friend-link-item>
  </div>
</template>

<style lang="less" scoped>
@import "./friendLink.less";
</style>

<!-- 
  TODO - 4.20 => 4.21
  这里的item搬走 √
  用props传值 √
  提交友链的预览 √
  展示真实数据
  表单验证
  手机端warp
 -->