<!--
 * @Author: litfa
 * @Date: 2022-04-06 19:25:17
 * @LastEditTime: 2022-05-03 15:04:38
 * @LastEditors: litfa
 * @Description: 文章预览
 * @FilePath: /blog/src/components/Account/MyArticles/Preview.vue
 * 
-->
<script lang="ts" setup>
import Preview from '../Preview/Preview.vue'
import Card from '@/components/Card/Card.vue'
import { getUser as getListApi } from '@/apis/getList'
import { computed } from '@vue/reactivity'
import { useCounterStore } from '@/store/index'
import { ref } from 'vue'
import EmptyList from '@/components/Illustrations/EmptyList.vue'
const store = useCounterStore()

const user: any = computed(() => {
  return store
})

const articlesList: any = ref([])
const getList = async () => {
  let { data: res } = await getListApi(0, 4, user.value.id)
  articlesList.value = res.list
}
getList()
</script>

<template>
  <Preview title="发布的文章" to="articles">
    <div class="MyArticles">
      <Card
        v-for="i in articlesList"
        :key="i.id"
        :view-author="false"
        :view-shadow="false"
        :id="i.id"
        :avatar="i.avatar"
        :username="i.username"
        :date="i.createDate"
        :title="i.title"
        :desc="i.desc || i.content"
        :cover="i.cover"
        :likes-count="i.likes_count"
        :author="i.author"
      ></Card>
      <EmptyList v-if="(articlesList.length < 1)"></EmptyList>
    </div>
  </Preview>
</template>

<style lang="less" scoped>
.MyArticles {
  padding-bottom: 40px;
  .card {
    border-bottom: 0.5px rgba(170, 170, 170, 0.208) solid;
    border-radius: 0;
    height: 160px;
    :deep(.articles) {
      margin-left: 0;
    }
  }
}
</style>