<!--
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-03-15 19:22:04
 * @LastEditors: litfa
 * @Description: 首页
 * @FilePath: /blog/src/views/Home.vue
 * 
-->
<template>
  <div class="home">
    <Card
      v-for="i in articlesList"
      :key="i.id"
      :name="i.title"
      :avatar="i.avatar"
      :username="i.username"
      :date="'/'"
      :title="i.title"
      :desc="i.content"
    ></Card>
  </div>
</template>

<script lang="ts" setup >
import Card from '@/components/Card.vue'
import getListApi from '@/apis/getList'
import { ref } from 'vue'

let articlesList: any = ref([])

const initArticles = async () => {
  const { data: res } = await getListApi()
  articlesList.value = res.list

}
initArticles()
</script>

<style lang="less" scoped></style>