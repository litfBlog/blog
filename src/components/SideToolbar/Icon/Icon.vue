<!--
 * @Author: litfa
 * @Date: 2022-04-01 16:09:23
 * @LastEditTime: 2022-04-03 16:39:38
 * @LastEditors: litfa
 * @Description: icon
 * @FilePath: /blog/src/components/SideToolbar/Icon/Icon.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
const props = defineProps(propNames)
</script>

<template>
  <div class="Icon">
    <slot></slot>
    <span>{{ count }}</span>
  </div>
</template>

<style lang="less" scoped>
.Icon {
  width: 40px;
  height: 40px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    :deep(path) {
      stroke: @primary !important;
    }
    color: @primary;
  }
  :deep(.liked) {
    position: relative;
    // 端午点赞特效
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: url(../../../assets/holiday/粽子.png) center no-repeat;
      background-size: contain;
      animation: zongzi 0.5s;
    }
    @keyframes zongzi {
      0% {
        opacity: 0;
        transform: scale(1);
      }
      10% {
        opacity: 1;
      }

      30% {
        transform: scale(0.8);
      }

      70% {
        transform: scale(1);
      }
    }
    path {
      // 点赞特效使用期间隐藏
      opacity: 0;
      fill: @primary !important;
      stroke: none !important;
      stroke-width: 0;
      &:first-child {
        transform: translateX(1px);
      }
    }
    color: @primary;
  }
}
</style>