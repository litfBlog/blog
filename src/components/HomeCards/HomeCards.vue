<!--
 * @Author: litfa
 * @Date: 2022-04-03 19:02:49
 * @LastEditTime: 2022-04-29 15:50:15
 * @LastEditors: litfa
 * @Description: 首页文章
 * @FilePath: /blog/src/components/HomeCards/HomeCards.vue
 * 
-->
<script lang="ts" setup>
import Card from '@/components/Card/Card.vue'
import getListApi from '@/apis/getList'
import { ref } from 'vue'

let articlesList: any = ref([])

const initArticles = async () => {
  const { data: res } = await getListApi()
  articlesList.value = res.list
}
await initArticles()
</script>

<template>
  <div>
    <Card
      v-for="i in articlesList"
      :key="i.id"
      :id="i.id"
      :avatar="i.avatar"
      :username="i.username"
      :date="i.createDate"
      :title="i.title"
      :desc="i.desc || i.content"
      :cover="i.cover"
      :likes-count="i.likes_count"
      :comment-count="i.comment_count"
      :author="i.author"
      :create-date="i.create_date"
      :avatar-pendant-url="i.avatar_pendant_url"
    />
  </div>
</template>

<style lang="less" scoped>
</style>