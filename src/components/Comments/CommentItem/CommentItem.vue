<!--
 * @Author: litfa
 * @Date: 2022-04-05 15:50:52
 * @LastEditTime: 2022-04-05 17:05:02
 * @LastEditors: litfa
 * @Description: 评论内容
 * @FilePath: /blog/src/components/Comments/CommentItem/CommentItem.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
import CommentChildItem from '../CommentChildItem/CommentChildItem.vue'
import { GoodTwo, More } from '@icon-park/vue-next'
const props = defineProps(propNames)
</script>

<template>
  <div class="CommentItem">
    <div class="data">
      <el-image :src="props.avatar" :alt="`${props.avatar}的头像`" fit="cover" />
      <div class="info">
        <div class="name">{{ username }}</div>
        <div class="content">{{ content }}</div>
        <div class="bottom">
          <span>一小时前</span>
          <span>
            <good-two theme="outline" size="18" fill="#666" :strokeWidth="3" />100
          </span>
          <span>回复</span>
          <span>
            <more theme="outline" size="20" fill="#666" :strokeWidth="3" />
          </span>
        </div>
      </div>
    </div>
    <CommentChildItem v-for="item in (props.children as any)" :key="item.id" v-bind="item"></CommentChildItem>
  </div>
</template>

<style lang="less" scoped>
@import "./commentItem.less";
</style>