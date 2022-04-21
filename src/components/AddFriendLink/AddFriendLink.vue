<!--
 * @Author: litfa
 * @Date: 2022-04-20 20:33:03
 * @LastEditTime: 2022-04-21 14:15:24
 * @LastEditors: litfa
 * @Description: 申请友链
 * @FilePath: /blog/src/components/AddFriendLink/AddFriendLink.vue
 * 
-->
<script lang="ts" setup>
import FriendLinkItem from '../FriendLinkItem/FriendLinkItem.vue'
import { ref, reactive } from 'vue'
const open = ref(true)

const form = reactive({
  name: '',
  url: '',
  desc: '',
  avatar: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div>
    <el-button type="success" @click="open = !open">申请友链</el-button>
    <div style="margin-top: 20px; height: 200px">
      <el-collapse-transition>
        <div class="form" v-show="open">
          <el-form
            :model="form"
            label-width="100px"
            label-position="right"
            class="demo-form-inline"
          >
            <el-form-item label="网站名">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="主页地址">
              <el-input v-model="form.url" />
            </el-form-item>
            <el-form-item label="介绍">
              <el-input v-model="form.desc" />
            </el-form-item>
            <el-form-item label="头像">
              <el-input v-model="form.avatar" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">Query</el-button>
            </el-form-item>
          </el-form>
          <div class="preview">
            <friend-link-item :name="form.name" :desc="form.desc" :avatar="form.avatar"></friend-link-item>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./addFriendLink.less";
</style>