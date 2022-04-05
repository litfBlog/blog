<!--
 * @Author: litfa
 * @Date: 2022-04-04 15:39:47
 * @LastEditTime: 2022-04-05 16:13:20
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
  <div style="height: 1000px;"></div>
</template>

<style lang="less" scoped>
</style>