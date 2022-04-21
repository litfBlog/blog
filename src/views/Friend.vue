<!--
 * @Author: litfa
 * @Date: 2022-04-20 19:45:40
 * @LastEditTime: 2022-04-20 20:37:47
 * @LastEditors: litfa
 * @Description: 友链
 * @FilePath: /blog/src/views/Friend.vue
 * 
-->
<script lang="ts" setup>
import FriendLink from '@/components/FriendLink/FriendLink.vue'
import AddFriendLink from '@/components/AddFriendLink/AddFriendLink.vue'
</script>

<template>
  <div class="Friend">
    <friend-link></friend-link>
    <add-friend-link></add-friend-link>
  </div>
</template>

<style lang="less" scoped>
.Friend {
  max-width: 1000px;
  padding: 15px;
  box-sizing: border-box;
  min-height: 60vh;
  background-color: @card-background-color;
  margin: 0 auto;
}
</style>