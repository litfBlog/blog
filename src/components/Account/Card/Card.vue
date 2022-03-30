<!--
 * @Author: litfa
 * @Date: 2022-02-17 17:04:04
 * @LastEditTime: 2022-03-30 16:08:17
 * @LastEditors: litfa
 * @Description: 个人页文章卡片
 * @FilePath: /blog/src/components/Account/Card/Card.vue
 * 
-->
<template>
  <div class="card" @click="router.push(`/p/${props.id}`)">
    <div class="articles">
      <el-image class="cover" :src="cover" fit="cover" lazy></el-image>
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
import { useRouter } from 'vue-router'
import { ThumbsUp, PreviewOpen, Comment } from '@icon-park/vue-next'
import formatDate from '@/utils/formatDate'
const props = defineProps(propNames)
const router = useRouter()
const size = 18
</script>

<style lang="less" scoped>
@import "./card.less";
</style>