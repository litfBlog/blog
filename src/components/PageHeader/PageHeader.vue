<!--
 * @Author: litfa
 * @Date: 2022-03-28 18:57:08
 * @LastEditTime: 2022-03-28 19:52:14
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /blog/src/components/PageHeader/PageHeader.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
import formatDate from '@/utils/formatDate'
import { computed } from '@vue/reactivity'
const props = defineProps(propNames)
const createDate = computed(() => {
  return formatDate(props.date || 0)
})
</script>

<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <div class="info">{{ createDate }}</div>
    <div class="author">
      <div class="user">
        <div class="avatar">
          <el-image :src="props.avatar" fit="cover"></el-image>
        </div>
        <div class="text">
          <div class="name">{{ name }}</div>
          <div class="info"></div>
        </div>
      </div>
      <el-button type="success" plain>+ 关注</el-button>
    </div>
    <hr />
  </div>
</template>

<style lang="less" scoped>
@import "./pageHeader.less";
</style>