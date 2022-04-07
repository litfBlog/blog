<!--
 * @Author: litfa
 * @Date: 2022-02-16 18:24:27
 * @LastEditTime: 2022-04-07 19:52:20
 * @LastEditors: litfa
 * @Description: 顶部栏
 * @FilePath: /blog/src/components/NavBar.vue
 * 
-->
<template>
  <div class="navBar">
    <div class="left">
      <router-link to="/">
        <img class="logo" :src="require('@/assets/logo.webp')" alt="logo" />
        <span class="title">Litf Press</span>
      </router-link>
    </div>
    <div class="right">
      <div class="login" v-if="!user.isLogin">
        <router-link to="/login">注册/登录</router-link>
      </div>
      <div class="user" v-else>
        <NavBarUser></NavBarUser>
      </div>
      <div class="nav">
        <el-button type="success" @click="router.push('/edit')">投稿</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import NavBarUser from './NavBarUser.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

const user = computed(() => {
  return store.state.user
})
</script>

<style lang="less" scoped>
.navBar {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: @card-background-color;
  box-shadow: 0 0px 10px 5px rgba(114, 114, 114, 0.096);
  z-index: 1000;
  .left,
  a {
    display: flex;
    align-items: center;
    .logo {
      height: 38px;
    }
    .title {
      font-size: 26px;
      font-weight: 600;
      color: #2c3e50;
    }
  }
  .right {
    height: 100%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    .user {
      height: 100%;
    }
    .nav {
      .el-button {
        margin: 0 5px;
      }
    }
  }
}
</style>