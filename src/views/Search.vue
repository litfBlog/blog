<!--
 * @Author: litfa
 * @Date: 2022-04-30 17:09:41
 * @LastEditTime: 2022-04-30 18:29:21
 * @LastEditors: litfa
 * @Description: 搜索页面
 * @FilePath: /blog/src/views/Search.vue
 * 
-->
<script lang="ts" setup>
import Search from '@/components/Search/Search.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { search as searchApi } from '@/apis/search'
import { ElMessage } from 'element-plus'
import Card from '@/components/Card/Card.vue'
const route = useRoute()
const key = ref('')
watch(() => route.query.w, (e) => {
  key.value = Math.random().toString()
  search()
})

const results: any = ref([])

const search = async () => {
  const { data: res } = await searchApi(route.query.w as string)
  if (res.status == 1) {
    results.value = res.data
  } else {
    ElMessage.error('数据获取失败')
  }
}
search()
</script>

<template>
  <div class="search">
    <Search :value="($route.query.w as string)" target="_self" placeholder="输入关键词搜索" :key="key"></Search>
    <Card
      v-for="i in results"
      :key="i.id"
      :view-shadow="false"
      :id="i.id"
      :avatar="i.avatar"
      :username="i.username"
      :date="i.createDate"
      :title="i.title"
      :desc="i.content || i.desc"
      :cover="i.cover"
      :likes-count="i.likes_count"
      :comment-count="i.comment_count"
      :author="i.author"
      :create-date="i.create_date"
    />
  </div>
</template>

<style lang="less" scoped>
.search {
  max-width: 1000px;
  min-height: 80vh;
  margin: 0 auto;
  background-color: @card-background-color;
  display: flex;
  flex-direction: column;
  .search-position {
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
  }
  .card {
    margin-left: 5%;
    border-bottom: 0.5px #aaaa solid;
    border-radius: 0;
    &:last-child {
      border: none;
    }
  }
}
</style>