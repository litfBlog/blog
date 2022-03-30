<!--
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-03-30 19:40:12
 * @LastEditors: litfa
 * @Description: 首页
 * @FilePath: /blog/src/views/Home.vue
 * 
-->
<template>
  <div class="Home">
    <div>
      <Card
        v-for="i in articlesList"
        :key="i.id"
        :id="i.id"
        :name="i.title"
        :avatar="i.avatar"
        :username="i.username"
        :date="i.createDate"
        :title="i.title"
        :desc="i.desc || i.content"
        :cover="i.cover"
      ></Card>
    </div>
    <HomeComponents></HomeComponents>
  </div>
</template>

<script lang="ts" setup >
import Card from '@/components/Card/Card.vue'
import HomeComponents from '@/components/HomeComponents/HomeComponents.vue'
import getListApi from '@/apis/getList'
import { ref } from 'vue'

let articlesList: any = ref([])

const initArticles = async () => {
  const { data: res } = await getListApi()
  articlesList.value = res.list
}
initArticles()
</script>

<style lang="less" scoped>
.Home {
  display: flex;
  max-width: 1500px;
  justify-content: center;
}
</style>