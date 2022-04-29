<!--
 * @Author: litfa
 * @Date: 2022-03-30 19:24:50
 * @LastEditTime: 2022-04-29 16:52:54
 * @LastEditors: litfa
 * @Description: 使用微信小程序
 * @FilePath: /blog/src/components/HomeComponents/Miniprogram.vue
 * 
-->
<script lang="ts" setup>

</script>

<template>
  <div class="Miniprogram">
    <el-image :src="require('@/assets/gh_e9be314c6626_258.jpg')" fit="cover"></el-image>
    <div class="text">
      <span>打开小程序</span>
      <span>手机阅读更方便</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Miniprogram {
  display: flex;
  height: 120px;
  background-color: @card-background-color;
  padding: 10px;
  box-sizing: border-box;
  .el-image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  div.text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    padding: 5px 0;
    box-sizing: border-box;
    span {
      &:first-child {
        font-size: 18px;
        color: @text-color;
      }
      &:last-child {
        color: @text-color-line;
      }
    }
  }
}
</style>