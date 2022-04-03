<!--
 * @Author: litfa
 * @Date: 2022-03-22 11:05:47
 * @LastEditTime: 2022-04-03 17:50:52
 * @LastEditors: litfa
 * @Description: 页面
 * @FilePath: /blog/src/views/Page.vue
 * 
-->
<script lang="ts" setup>
import Render from '@/components/Render/Render.vue'
import PageHeader from '@/components/PageHeader/PageHeader.vue'
import getArticlesApi from '@/apis/getArticles'
import SideToolbar from '@/components/SideToolbar/SideToolbar.vue'

import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()

interface ToolbarData {
  likes?: number
}

const content = ref('')
const headerInfo: any = ref({})
const likes = ref(0)
const liked = ref(false)
const toolbarData = ref<ToolbarData>({})

const getArticles = async () => {
  const { data: res } = await getArticlesApi(route.params.id as string)

  if (res.status == 1) {
    content.value = res.data.content
    headerInfo.value.title = res.data.title
    headerInfo.value.avatar = res.data.avatar
    headerInfo.value.date = res.data.createDate
    headerInfo.value.name = res.data.username
    likes.value = res.data.likes_count
    liked.value = res.data.liked != null ? true : false
  }
}
getArticles()
</script>

<template>
  <div class="Page">
    <page-header v-bind="headerInfo"></page-header>
    <Render :text="content"></Render>
    <SideToolbar v-model:likes="likes" v-model:liked="liked"></SideToolbar>
  </div>
</template>

<style lang="less" scoped>
.Page {
  background-color: @card-background-color;
  max-width: 800px;
  min-height: 80vh;
  margin: 0 auto;
}
</style>