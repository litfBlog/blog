<!--
 * @Author: litfa
 * @Date: 2022-04-25 19:56:00
 * @LastEditTime: 2022-04-25 20:05:19
 * @LastEditors: litfa
 * @Description: 展示异常状态（404）
 * @FilePath: /blog/src/components/Status/Status.vue
 * 
-->
<script lang="ts" setup>
const msg: string[] = ['Looks like we\'ve got some broken links.']
const props = defineProps({
  code: [Number, String]
})
</script>

<template>
  <div class="Status">
    <div class="center">
      <h1>{{ code }}</h1>
      <p>{{ msg[Math.floor(Math.random() * msg.length)] }}</p>
      <a href="/">返回首页</a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Status {
  width: 100%;
  padding-top: 30vh;
  display: flex;
  justify-content: center;
}
.center {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100px;
  margin-left: 10px;
}

h1 {
  color: #2c3e50;
}
p {
  font-size: 1rem;
  color: #999;
  border-left: 0.2rem solid #dfe2e5;
  margin: 1rem 0;
  padding: 0.25rem 0 0.25rem 1rem;
}
a {
  color: #3eaf7c;
  font-weight: 500;
  text-decoration: none;
}
</style>