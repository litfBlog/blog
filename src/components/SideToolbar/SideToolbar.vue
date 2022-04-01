<!--
 * @Author: litfa
 * @Date: 2022-04-01 16:06:13
 * @LastEditTime: 2022-04-01 18:02:43
 * @LastEditors: litfa
 * @Description: 文章侧边工具栏
 * @FilePath: /blog/src/components/SideToolbar/SideToolbar.vue
 * 
-->
<script lang="ts" setup>
import Icon from './Icon/Icon.vue'
import { ThumbsUp, Up, Star } from '@icon-park/vue-next'
import { ElBacktop } from 'element-plus'
const size = 30
</script>

<template>
  <div class="SideToolbar">
    <div class="SideBar">
      <div class="box">
        <Icon :count="1000">
          <ThumbsUp theme="outline" :size="size" fill="#333" :stroke-width="3" />
        </Icon>
        <Icon :count="1000">
          <Star theme="outline" :size="size" fill="#333" />
        </Icon>
      </div>

      <el-backtop :right="100" :bottom="100">
        <up theme="outline" :size="size" fill="#333" />
      </el-backtop>
    </div>
  </div>
</template>

<style lang="less" scoped>
.SideToolbar {
  width: 95%;
  height: 300px;
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  .SideBar {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .box {
      border-radius: 10px;
      margin: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      transition: all 0.3s;
    }
  }
}
</style>