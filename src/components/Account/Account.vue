<!--
 * @Author: litfa
 * @Date: 2022-04-06 19:11:53
 * @LastEditTime: 2022-04-26 17:40:32
 * @LastEditors: litfa
 * @Description: 卡片信息
 * @FilePath: /blog/src/components/Account/Account.vue
 * 
-->
<script lang="ts" setup>
import { defineAsyncComponent, nextTick, ref, watch } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { Home, Word, Like, Star } from '@icon-park/vue-next'
import { useRoute } from 'vue-router'
import MyArticlesPreview from '@/components/Account/MyArticles/Preview.vue'
import LikesPreview from '@/components/Account/Likes/Preview.vue'
import scrollInto from '@/utils/scrollIntoView'
const route = useRoute()
const MyArticles = defineAsyncComponent(() => import('./MyArticles/MyArticles.vue'))
const Likes = defineAsyncComponent(() => import('./Likes/Likes.vue'))

const activeName = ref(window.location.hash.replace('#', '') || 'home')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // 当前滚动高度
  const scroll = window.scrollY
  console.log(window.scrollY)

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
  // 重置因修改hash修改的滚动高度
  window.scroll({
    'top': scroll
  })
  nextTick(() => {
    // 平滑滚顶到顶部
    scrollInto('.tabs', -80)
  })
}
watch(() => route.hash, (e) => {
  if (e == '') return
  activeName.value = e.replace('#', '')
})

</script>

<template>
  <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
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
      <!-- 两个style 优化异步组件加载时 页面抖动 -->
      <my-articles style="display: none;" :style="{ display: 'block' }"></my-articles>
    </el-tab-pane>
    <el-tab-pane name="likes" lazy>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <Like theme="filled" fill="#f00" />
          </el-icon>喜欢
        </span>
      </template>
      <!-- 两个style 优化异步组件加载时 页面抖动 -->
      <Likes style="display: none;" :style="{ display: 'block' }"></Likes>
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
  width: 47px;
  justify-content: space-around;
  color: @text-color;
}
:deep(.el-tabs__header) {
  position: sticky;
  top: 70px;
  z-index: 10;
  background-color: @card-background-color;
  padding-left: 15px;
  margin-bottom: 9px;
}

:deep(.el-tabs__content) {
  background-color: @card-background-color;
}
</style>