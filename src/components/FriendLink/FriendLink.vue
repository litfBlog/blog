<!--
 * @Author: litfa
 * @Date: 2022-04-20 19:50:59
 * @LastEditTime: 2022-04-20 20:19:50
 * @LastEditors: litfa
 * @Description: 友链列表
 * @FilePath: /blog/src/components/FriendLink/FriendLink.vue
 * 
-->
<script lang="ts" setup>

</script>

<template>
  <h1>小伙伴们</h1>
  <div class="list">
    <div class="item" v-for="(item, index) in 10" :key="index">
      <div class="text">
        <div class="name">sigma</div>
        <div class="desc">一个菜鸟技术爱好者</div>
      </div>
      <div class="avatar">
        <el-image
          src="https://www.daiyuyang.cn/upload/2022/02/logo-2032cb2433a94dcdbc487946d3a49990.jpg"
          fit="cover"
        ></el-image>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./friendLink.less";
</style>