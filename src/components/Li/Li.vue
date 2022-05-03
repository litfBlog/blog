<!--
 * @Author: litfa
 * @Date: 2022-04-08 16:20:23
 * @LastEditTime: 2022-04-08 16:35:46
 * @LastEditors: litfa
 * @Description: li无须列表
 * @FilePath: /blog/src/components/Li/Li.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
import { Right } from '@icon-park/vue-next'
const props = defineProps(propNames)
</script>

<template>
  <li>
    <router-link :to="to">
      <div class="left">
        <div class="icon">
          <slot></slot>
        </div>
        <div class="text">{{ text }}</div>
      </div>
      <div class="icon-go">
        <right theme="outline" size="22" fill="#666" :strokeWidth="3" />
      </div>
    </router-link>
  </li>
</template>

<style lang="less" scoped>
li {
  width: 100%;
  list-style: none;
  margin: 8px 0;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #666;
      .icon {
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>