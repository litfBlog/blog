<!--
 * @Author: litfa
 * @Date: 2022-04-03 19:08:17
 * @LastEditTime: 2022-04-03 20:16:28
 * @LastEditors: litfa
 * @Description: 首页骨架屏
 * @FilePath: /blog/src/components/HomeSkeleton/HomeSkeleton.vue
 * 
-->
<script lang="ts" setup>

</script>

<template>
  <div class="HomeSkeleton">
    <!-- 用户 -->
    <el-skeleton animated class="user" style="--el-skeleton-circle-size: 50px">
      <template #template>
        <!-- 圆形 头像 -->
        <el-skeleton-item variant="circle" class="avatar" />
        <el-skeleton class="info" :rows="1" />
      </template>
    </el-skeleton>
    <!-- 文章 -->
    <el-skeleton animated class="articles" style="--el-skeleton-circle-size: 40px">
      <template #template>
        <!-- 封面 -->
        <el-skeleton-item variant="image" class="cover" />
        <el-skeleton class="info" :rows="3" />
      </template>
    </el-skeleton>
  </div>
</template>

<style lang="less" scoped>
@import "./homeSkeleton.less";
</style>