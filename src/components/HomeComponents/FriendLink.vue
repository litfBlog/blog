<!--
 * @Author: litfa
 * @Date: 2022-04-09 17:38:05
 * @LastEditTime: 2022-04-09 18:11:21
 * @LastEditors: litfa
 * @Description: 友情链接
 * @FilePath: /blog/src/components/HomeComponents/FriendLink.vue
 * 
-->

<!-- 预留动态渲染接口 -->
<script lang="ts" setup>
import { LinkOne, Right } from '@icon-park/vue-next'
</script>

<template>
  <div class="FriendLink">
    <div class="title">
      <router-link to="/">
        <link-one
          theme="filled"
          size="20"
          fill="#2c3e50"
          :strokeWidth="5"
          style="transform:rotateY(180deg); margin-right: 3px;"
        />大佬朋友们
      </router-link>
    </div>
    <div class="item">
      <el-image class="cover" src="https://alongw.cn/icon/logo.jpg" fit="cover" />阿龙博客
    </div>
    <div class="item">
      <el-image class="cover" src="https://alongw.cn/icon/logo.jpg" fit="cover" />阿龙博客
    </div>
    <div class="item">
      <el-image class="cover" src="https://alongw.cn/icon/logo.jpg" fit="cover" />阿龙博客
    </div>
    <div class="item">
      <el-image class="cover" src="https://alongw.cn/icon/logo.jpg" fit="cover" />阿龙博客
    </div>
    <div class="any">
      <router-link to="/">
        查看更多
        <right theme="filled" size="20" fill="#333" :strokeWidth="3" />
      </router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
.FriendLink {
  background-color: @card-background-color;
  padding: 10px;
  box-sizing: border-box;
  .title {
    font-size: 20px;
    color: #2c3e50;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .item {
    max-width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 18px;
    margin: 5px 0 5px 5px;
    .cover {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
    }
  }
  .any {
    display: flex;
    align-items: center;
    color: #2c3e50;
    font-weight: 600;
    font-size: 17px;
  }
}
</style>