<!--
 * @Author: litfa
 * @Date: 2022-04-20 20:59:37
 * @LastEditTime: 2022-04-21 14:11:50
 * @LastEditors: litfa
 * @Description: 友链项
 * @FilePath: /blog/src/components/FriendLinkItem/FriendLinkItem.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
const props = defineProps(propNames)
</script>

<template>
  <div class="item">
    <div class="text">
      <div class="name">{{ props.name }}</div>
      <div class="desc">{{ props.desc }}</div>
    </div>
    <div class="avatar">
      <el-image :src="props.avatar" fit="cover"></el-image>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./friendLinkItem.less";
</style>