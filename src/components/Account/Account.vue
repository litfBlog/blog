<!--
 * @Author: litfa
 * @Date: 2022-04-06 19:11:53
 * @LastEditTime: 2022-04-07 16:22:50
 * @LastEditors: litfa
 * @Description: 卡片信息
 * @FilePath: /blog/src/components/Account/Account.vue
 * 
-->
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { Home, Word, Like, Star } from '@icon-park/vue-next'
import MyArticlesPreview from '@/components/Account/MyArticles/Preview.vue'
const MyArticles = defineAsyncComponent(() => import('./MyArticles/MyArticles.vue'))

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event)
}
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane name="first">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <home theme="filled" />
          </el-icon>总览
        </span>
      </template>
      <my-articles-preview></my-articles-preview>
    </el-tab-pane>
    <el-tab-pane name="second" lazy>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <Word theme="filled" fill="#409eff" />
          </el-icon>文章
        </span>
      </template>
      <my-articles></my-articles>
    </el-tab-pane>
    <el-tab-pane name="third">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <Like theme="filled" fill="#f00" />
          </el-icon>喜欢
        </span>
      </template>
      Role
    </el-tab-pane>
    <el-tab-pane label="收藏" name="fourth">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <Star theme="filled" fill="#f3a034" />
          </el-icon>收藏
        </span>
      </template>
      Task
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="less" scoped>
.custom-tabs-label {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>