<!--
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-03-02 18:37:25
 * @LastEditors: litfa
 * @Description: 首页
 * @FilePath: /blog/src/views/Home.vue
 * 
-->
<template>
  <div class="home">
    <Card name="name"></Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/Card.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Card
  }
})
</script>
