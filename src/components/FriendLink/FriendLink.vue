<!--
 * @Author: litfa
 * @Date: 2022-04-20 19:50:59
 * @LastEditTime: 2022-04-22 15:00:59
 * @LastEditors: litfa
 * @Description: 友链列表
 * @FilePath: /blog/src/components/FriendLink/FriendLink.vue
 * 
-->
<script lang="ts" setup>
import FriendLinkItem from '../FriendLinkItem/FriendLinkItem.vue'
import { ElLoading } from 'element-plus'
import { getAllLink } from '@/apis/getFriendLink'
import { ref } from 'vue'

const friendLink: any = ref([])
const getFriendLink = async () => {
  const { data: res } = await getAllLink()
  friendLink.value = res.data
}
getFriendLink()
</script>

<template>
  <h1>小伙伴们</h1>
  <div class="list">
    <friend-link-item
      v-for="item in friendLink"
      :key="item.id"
      :name="item.name"
      :desc="item.desc"
      :avatar="item.icon"
      :url="item.url"
    ></friend-link-item>
  </div>
</template>

<style lang="less" scoped>
@import "./friendLink.less";
</style>