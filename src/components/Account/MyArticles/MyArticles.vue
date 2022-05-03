<!--
 * @Author: litfa
 * @Date: 2022-03-29 20:28:23
 * @LastEditTime: 2022-05-03 15:03:49
 * @LastEditors: litfa
 * @Description: 我的文章
 * @FilePath: /blog/src/components/Account/MyArticles/MyArticles.vue
 * 
-->
<script lang="ts" setup>
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
  let { data: res } = await getListApi(undefined, undefined, user.value.id)
  articlesList.value = res.list
}
getList()
</script>

<template>
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
</template>

<style lang="less" scoped>
.MyArticles {
  padding-bottom: 40px;
  .card {
    border-bottom: 0.5px #aaaa solid;
    border-radius: 0;
    height: 160px;
    :deep(.articles) {
      margin-left: 0;
    }
  }
}
</style>