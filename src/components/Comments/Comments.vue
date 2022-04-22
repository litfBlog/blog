<!--
 * @Author: litfa
 * @Date: 2022-04-04 15:39:47
 * @LastEditTime: 2022-04-22 16:00:11
 * @LastEditors: litfa
 * @Description: 评论组件
 * @FilePath: /blog/src/components/Comments/Comments.vue
 * 
-->
<script lang="ts" setup>
import SendComment from './SendComment/SendComment.vue'
import CommentList from './CommentList/CommentList.vue'
</script>

<template>
  <SendComment></SendComment>
  <CommentList></CommentList>
  <div class="EmptyList">没有更多评论</div>
</template>

<style lang="less" scoped>
.EmptyList {
  color: @text-color;
  text-align: center;
  padding: 35px 0 15px 0;
}
</style>