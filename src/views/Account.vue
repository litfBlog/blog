<!--
 * @Author: litfa
 * @Date: 2022-03-29 19:18:53
 * @LastEditTime: 2022-03-29 20:59:57
 * @LastEditors: litfa
 * @Description: 个人中心
 * @FilePath: /blog/src/views/Account.vue
 * 
-->
<script lang="ts" setup>
import { User, MyArticles } from '@/components/Account/index'
</script>

<template>
  <div class="Account">
    <User></User>
    <my-articles></my-articles>
  </div>
</template>

<style lang="less" scoped>
.Account {
  background-color: @card-background-color;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}
</style>