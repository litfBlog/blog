<!--
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-04-03 20:15:48
 * @LastEditors: litfa
 * @Description: 首页
 * @FilePath: /blog/src/views/Home.vue
 * 
-->
<template>
  <div class="Home">
    <Suspense>
      <HomeCards></HomeCards>
      <template #fallback>
        <div style="width: 50%;">
          <HomeSkeleton></HomeSkeleton>
          <HomeSkeleton></HomeSkeleton>
          <HomeSkeleton></HomeSkeleton>
          <HomeSkeleton></HomeSkeleton>
          <HomeSkeleton></HomeSkeleton>
        </div>
      </template>
    </Suspense>
    <HomeComponents></HomeComponents>
  </div>
</template>

<script lang="ts" setup >
import HomeComponents from '@/components/HomeComponents/HomeComponents.vue'
import HomeCards from '@/components/HomeCards/HomeCards.vue'
import HomeSkeleton from '@/components/HomeSkeleton/HomeSkeleton.vue'
</script>

<style lang="less" scoped>
.Home {
  display: flex;
  max-width: 1500px;
  justify-content: center;
}
</style>