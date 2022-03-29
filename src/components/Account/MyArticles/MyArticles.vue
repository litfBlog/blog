<!--
 * @Author: litfa
 * @Date: 2022-03-29 20:28:23
 * @LastEditTime: 2022-03-29 21:03:20
 * @LastEditors: litfa
 * @Description: 我的文章
 * @FilePath: /blog/src/components/Account/MyArticles/MyArticles.vue
 * 
-->
<script lang="ts" setup>
import Card from '@/components/Card/Card.vue'
import getListApi from '@/apis/getList'
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { ref } from 'vue'
const store = useStore()

const user: any = computed(() => {
  return store.state.user
})

const articlesList: any = ref([])
const getList = async () => {
  let { data: res } = await getListApi(undefined, undefined, user.value.id)
  articlesList.value = res.list
}
getList()
</script>

<template>
  <div v-for="i in articlesList" :key="i.id">
    <Card
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
</template>

<style lang="less" scoped>
</style>