<!--
 * @Author: litfa
 * @Date: 2022-02-17 17:04:04
 * @LastEditTime: 2022-03-27 20:36:14
 * @LastEditors: litfa
 * @Description: 文章卡片
 * @FilePath: /blog/src/components/Card/Card.vue
 * 
-->
<template>
  <div class="card">
    <div class="user">
      <el-image class="avatar" :src="avatar" fit="cover"></el-image>
      <div class="info">
        <span class="username">{{ username }}</span>
        <span class="date">{{ date ? formatDate(date) : '' }}</span>
      </div>
    </div>
    <div class="articles">
      <el-image class="cover" :src="cover" fix="cover" lazy></el-image>
      <div class="text">
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
      </div>
    </div>
    <div class="icons">
      <div class="item">
        <preview-open theme="filled" :size="size" fill="#97a2ab" />9
      </div>
      <div class="item">
        <thumbs-up theme="filled" :size="size" fill="#97a2ab" />3
      </div>
      <div class="item">
        <comment theme="filled" :size="size" fill="#97a2ab" />0
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import propNames from './props'
import { ThumbsUp, PreviewOpen, Comment } from '@icon-park/vue-next'
import formatDate from '@/utils/formatDate'
const props = defineProps(propNames)
const size = 18
</script>

<style lang="less" scoped>
@import "./card.less";
</style>