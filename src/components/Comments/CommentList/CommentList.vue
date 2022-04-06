<!--
 * @Author: litfa
 * @Date: 2022-04-05 16:09:09
 * @LastEditTime: 2022-04-06 18:41:35
 * @LastEditors: litfa
 * @Description: 评论列表
 * @FilePath: /blog/src/components/Comments/CommentList/CommentList.vue
 * 
-->
<script lang="ts" setup>
import CommentItem from '../CommentItem/CommentItem.vue'
import getCommentApi from '@/apis/getComment'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import bus from 'vue3-eventbus'
const route = useRoute()
const commentList = ref<any>([])
const getComment = async () => {
  const { data: res } = await getCommentApi(Number(route.params.id))
  if (res.status == 1) {
    commentList.value = res.data
  }
}
bus.on('reSetComment', () => {
  getComment()
})
getComment()
</script>

<template>
  <comment-item v-for="item in commentList" :key="item.id" v-bind="item"></comment-item>
</template>

<style lang="less" scoped>
</style>