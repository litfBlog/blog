<!--
 * @Author: litfa
 * @Date: 2022-02-16 02:07:22
 * @LastEditTime: 2022-04-30 18:44:03
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
        <div style="padding-right: 10px;">
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
document.title = 'Litf Blog'
</script>

<style lang="less" scoped>
.Home {
  display: grid;
  grid-column: 2;
  grid-template-columns: 2fr 0.8fr;
  grid-column-gap: 10px;
  max-width: 1060px;
  margin: 0 auto;
}
@media screen and (max-width: 720px) {
  .Home {
    grid-column: 1;
    grid-template-columns: 1fr;
  }
  .HomeComponents {
    display: none;
  }
}
</style>