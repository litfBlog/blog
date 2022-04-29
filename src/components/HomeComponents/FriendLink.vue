<!--
 * @Author: litfa
 * @Date: 2022-04-09 17:38:05
 * @LastEditTime: 2022-04-22 14:57:22
 * @LastEditors: litfa
 * @Description: 友情链接
 * @FilePath: /blog/src/components/HomeComponents/FriendLink.vue
 * 
-->

<!-- 预留动态渲染接口 -->
<script lang="ts" setup>
import { LinkOne, Right } from '@icon-park/vue-next'
import { getHomeLink as getHomeLinkApi } from '@/apis/getFriendLink'
import { ref } from 'vue'

const links = ref<Link[]>([])
interface Link {
  id: number
  url: string
  name: string
  desc: string
  icon: string
  'user_id': number
  date: string
  status: number
  'view_in_home': boolean
}
const getHomeLink = async () => {
  const { data: res } = await getHomeLinkApi()
  links.value = res.data
}
getHomeLink()
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
    <!-- <div class="item">
      <el-image class="cover" src="https://alongw.cn/icon/logo.jpg" fit="cover" />阿龙博客
    </div>-->
    <a class="item" v-for="i in links" :key="i.id" :href="i.url" target="_black">
      <el-image class="cover" :src="i.icon" fit="cover" />
      {{ i.name }}
    </a>
    <div class="any">
      <router-link to="/friend">
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
    color: @text-color;
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
    color: @text-color;
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
    color: @text-color-line;
    font-weight: 600;
    font-size: 17px;
  }
}
</style>