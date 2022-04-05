<!--
 * @Author: litfa
 * @Date: 2022-04-05 16:41:48
 * @LastEditTime: 2022-04-05 16:47:16
 * @LastEditors: litfa
 * @Description: 评论回复
 * @FilePath: /blog/src/components/Comments/CommentChildItem/CommentChildItem.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
const props = defineProps(propNames)
</script>

<template>
  <div class="CommentChildItem">
    <el-image :src="props.avatar" :alt="`${props.avatar}的头像`" fit="cover" />
    <div class="info">
      <div class="name">{{ username }}</div>
      <div class="content">{{ content }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./commentChildItem.less";
</style>