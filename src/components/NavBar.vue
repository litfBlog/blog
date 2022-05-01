<!--
 * @Author: litfa
 * @Date: 2022-02-16 18:24:27
 * @LastEditTime: 2022-05-01 17:25:36
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
        <span class="title">Litf Blog</span>
      </router-link>
    </div>
    <div class="right">
      <Search v-if="$route.path !== '/search'" style="width: 300px; "></Search>
      <SearchIcon size="28" class="SearchIcon" />
      <div class="login" v-if="!user.isLogin">
        <el-tooltip class="to-login" effect="dark" placement="bottom-end" v-model:visible="tooltip">
          <template #content>
            <span style="display: flex; align-items: center; color: #fff">
              登录体验更多功能
              <close-small theme="outline" size="20" fill="#aaa" @click="tooltip = false" />
            </span>
          </template>
          <router-link to="/login">
            <user-icon theme="outline" size="24" fill="#333" title="登录/注册" />
          </router-link>
        </el-tooltip>
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
import { computed, ref } from 'vue'
import NavBarUser from './NavBarUser/NavBarUser.vue'
import Search from './Search/Search.vue'
import { useCounterStore } from '@/store/index'
import { useRouter } from 'vue-router'
import { Search as SearchIcon, User as UserIcon, CloseSmall } from '@icon-park/vue-next'
const store = useCounterStore()
const router = useRouter()

const user = computed(() => {
  return store
})

const tooltip = ref(true)
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
      color: @text-color;
      transition: all 0.3s;
    }
  }
  .right {
    height: 100%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    .user,
    .login {
      height: 100%;
      margin: 0 15px;
      transition: all 0.3s;
      display: flex;
      align-items: center;
    }
    .login {
      .i-icon-user {
        border: 1.5px #333 solid;
        border-radius: 50%;
        padding: 3px;
      }
    }
    .nav {
      .el-button {
        margin: 0 5px;
      }
    }
    .SearchIcon {
      display: none;
    }
  }
}

@media screen and (max-width: 700px) {
  .navBar .right {
    .SearchIcon {
      display: block;
    }
    .search-position {
      display: none;
    }
  }
}
@media screen and (max-width: 400px) {
  .navBar .right {
    .user,
    .login {
      margin: 0 4px;
    }
  }
  .navBar .left .title {
    font-size: 16px;
  }
}
</style>