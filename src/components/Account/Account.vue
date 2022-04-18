<!--
 * @Author: litfa
 * @Date: 2022-04-06 19:11:53
 * @LastEditTime: 2022-04-18 18:21:13
 * @LastEditors: litfa
 * @Description: 卡片信息
 * @FilePath: /blog/src/components/Account/Account.vue
 * 
-->
<script lang="ts" setup>
import { defineAsyncComponent, ref, watch } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { Home, Word, Like, Star } from '@icon-park/vue-next'
import { useRoute } from 'vue-router'
import MyArticlesPreview from '@/components/Account/MyArticles/Preview.vue'
import LikesPreview from '@/components/Account/Likes/Preview.vue'
const route = useRoute()
const MyArticles = defineAsyncComponent(() => import('./MyArticles/MyArticles.vue'))
const Likes = defineAsyncComponent(() => import('./Likes/Likes.vue'))

const activeName = ref(window.location.hash.replace('#', '') || 'home')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  switch (tab.props.name) {
    case 'home':
      window.location.hash = ''
      break
    case 'articles':
      window.location.hash = 'articles'
      break
    case 'likes':
      window.location.hash = 'likes'
      break
    case 'stars':
      window.location.hash = 'stars'
      break
  }

}
watch(() => route.hash, (e) => {
  if (e == '') return
  activeName.value = e.replace('#', '')
})

</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane name="home">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <home theme="filled" />
          </el-icon>总览
        </span>
      </template>
      <my-articles-preview></my-articles-preview>
      <likes-preview></likes-preview>
    </el-tab-pane>
    <el-tab-pane name="articles" lazy>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <Word theme="filled" fill="#409eff" />
          </el-icon>文章
        </span>
      </template>
      <my-articles></my-articles>
    </el-tab-pane>
    <el-tab-pane name="likes">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <Like theme="filled" fill="#f00" />
          </el-icon>喜欢
        </span>
      </template>
      <Likes></Likes>
    </el-tab-pane>
    <!-- <el-tab-pane name="stars">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <Star theme="filled" fill="#f3a034" />
          </el-icon>收藏
        </span>
      </template>
      Task
    </el-tab-pane>-->
  </el-tabs>
</template>

<style lang="less" scoped>
.custom-tabs-label {
  display: flex;
  align-items: center;
  justify-content: center;
  color: @text-color;
}
:deep(.el-tabs__header) {
  position: sticky;
  top: 70px;
  z-index: 10;
  background-color: @card-background-color;
}
</style>