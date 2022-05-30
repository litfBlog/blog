<!--
 * @Author: litfa
 * @Date: 2022-04-30 17:09:41
 * @LastEditTime: 2022-05-03 14:41:19
 * @LastEditors: litfa
 * @Description: 搜索页面
 * @FilePath: /blog/src/views/Search.vue
 * 
-->
<script lang="ts" setup>
import Search from '@/components/Search/Search.vue'
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { search as searchApi } from '@/apis/search'
import { ElMessage } from 'element-plus'
import Card from '@/components/Card/Card.vue'
import EmptyList from '@/components/Illustrations/EmptyList.vue'
import { ElLoading } from 'element-plus'
import Avatar from '@/components/Avatar'
import getAvatarPendantApi from '@/apis/getAvatarPendant'
import getUserInfo from '@/utils/getUserInfo'
import { useCounterStore } from '@/store/index'

const user = useCounterStore()
const route = useRoute()
const key = ref('')
watch(() => route.query.w, (value) => {
  key.value = Math.random().toString()
  search()
})

const results: any = ref([])
const resultsRef = ref<HTMLElement | null>(null)
const isLoading = ref(true)
let loadingInstance: any
onMounted(() => {
  loadingInstance = ElLoading.service({ target: resultsRef.value || '#app > div.search > div.results', fullscreen: false })
})

const showGet = ref(false)
const search = async () => {
  // 关键词
  if (route.query.w?.indexOf('端午') != -1) {
    showGet.value = true
  }
  const { data: res } = await searchApi(route.query.w as string)
  isLoading.value = false
  if (res.status == 1) {
    results.value = res.data
    document.title = `${route.query.w}-搜索`
    loadingInstance.close()
  } else {
    ElMessage.error('数据获取失败')
  }
}
search()

let pendant = computed(() => {
  return user.pendant !== undefined && user.pendant !== null && user.pendant !== ''
})
const getAvatarPendant = async () => {
  const { data: res } = await getAvatarPendantApi()
  if (res.status == 200) {
    getUserInfo(true)
    ElMessage.success('领取成功')
  } else {
    ElMessage.error('领取失败，请稍后再试')
  }

}
</script>

<template>
  <div class="search">
    <Search :value="($route.query.w as string)" target="_self" placeholder="输入关键词搜索" :key="key"></Search>
    <div class="results" ref="resultsRef">
      <div class="get" v-if="showGet">
        <Avatar
          src="https://thirdwx.qlogo.cn/mmopen/vi_32/yXnndqaOfgHibZDwYHBEalqVkW7SW86s8SMwE2D96YXZwjg36iciaGcPNeLwZ56ssIibwibz4nhwXXKtGg15SMxTBvg/132"
          avatar-pendant-url="https://static-1259453062.cos.ap-shanghai.myqcloud.com/public%2Favatar-pendant%2F%E9%98%BF%E5%B7%B4%E6%80%AA.png"
          class="avatar"
        ></Avatar>
        <el-button @click="getAvatarPendant" :disabled="pendant">{{ pendant ? '已领取' : '领取' }}</el-button>
      </div>
      <Card
        v-for="i in results"
        :key="i.id"
        :view-shadow="false"
        :id="i.id"
        :avatar="i.avatar"
        :username="i.username"
        :date="i.createDate"
        :title="i.title"
        :desc="i.content || i.desc"
        :cover="i.cover"
        :likes-count="i.likes_count"
        :comment-count="i.comment_count"
        :author="i.author"
        :create-date="i.create_date"
      />
      <EmptyList v-if="!results[0] && !isLoading && $route.query.w && !showGet"></EmptyList>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search {
  max-width: 1000px;
  min-height: 80vh;
  margin: 0 auto;
  background-color: @card-background-color;
  display: flex;
  flex-direction: column;
  .search-position {
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
  }
  .card {
    margin-left: 5%;
    border-bottom: 0.5px #aaaa solid;
    border-radius: 0;
    &:last-child {
      border: none;
    }
  }
  .get {
    min-width: 300px;
    height: 150px;
    margin: 10px auto 10px auto;
    max-width: 600px;
    background-color: #aaa;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: url(../assets/holiday/未标题-1.jpg) center no-repeat;
    background-size: cover;
    .avatar {
      width: 80px;
      height: 80px;
    }
  }
}
</style>