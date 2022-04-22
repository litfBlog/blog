<!--
 * @Author: litfa
 * @Date: 2022-04-01 16:06:13
 * @LastEditTime: 2022-04-22 15:45:59
 * @LastEditors: litfa
 * @Description: 文章侧边工具栏
 * @FilePath: /blog/src/components/SideToolbar/SideToolbar.vue
 * 
-->
<script lang="ts" setup>
import { onUnmounted, ref } from 'vue'
import Icon from './Icon/Icon.vue'
import { ThumbsUp, Up, Comment } from '@icon-park/vue-next'
import { ElBacktop } from 'element-plus'
import ScrollObserver from '@/utils/scrollObserver'
import likeApi from '@/apis/like'
import { getCommentsCount as getCommentsCountApi } from '@/apis/getComment'
import { useRoute } from 'vue-router'
import scrollIntoView from '@/utils/scrollIntoView'
import bus from 'vue3-eventbus'

const route = useRoute()

const isScroll = ref(false)

// 是否滚动
let scrollObserver = new ScrollObserver(document.body, (e: boolean): void => {
  isScroll.value = e
})

onUnmounted(() => {
  scrollObserver.destroy()
})

const props = defineProps({
  likes: {
    type: Number
  },
  liked: {
    type: Boolean
  }
})

const emits = defineEmits(['update:likes', 'update:liked'])

const size = 30

const like = async () => {
  const { likes, liked } = props
  if (likes == undefined || liked == undefined) return
  // 先更新
  liked ?
    emits('update:likes', likes - 1) :
    emits('update:likes', likes + 1)
  emits('update:liked', !liked)
  // 发送请求
  const { data: res } = await likeApi(route.params.id as string, !liked)
  // 请求失败 重新赋值
  if (res.status !== 1 || res.liked == -1) {
    emits('update:likes', likes - 1)
    emits('update:liked', !liked)
    return alert('点赞失败')
  }
  // 请求成功
}

const commentsCount = ref<'-' | number>('-')
const getCommentsCount = async () => {
  const { data: res } = await getCommentsCountApi(Number(route.params.id as string))
  if (res.status == 1) return commentsCount.value = res.count
  commentsCount.value = '-'
}
getCommentsCount()

const toComments = () => {
  scrollIntoView('.SendComments')
  bus.emit('sendCommentsFocus')
}
</script>

<template>
  <div class="SideToolbar">
    <div class="SideBar" :class="{ hidden: isScroll }">
      <div class="box">
        <Icon :count="props.likes ? props.likes : 0" @click="like">
          <ThumbsUp
            theme="outline"
            :size="size"
            fill="var(--text-color)"
            :stroke-width="3"
            :class="{ liked: props.liked }"
          />
        </Icon>
        <Icon :count="commentsCount" @click="toComments">
          <comment theme="outline" :size="size" fill="var(--text-color)" />
        </Icon>
      </div>

      <el-backtop :right="100" :bottom="100">
        <up theme="outline" :size="size" fill="var(--text-color)" />
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
  pointer-events: none;
  .SideBar {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
    align-items: center;
    pointer-events: all;
    .box {
      border-radius: 10px;
      margin: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: @card-background-color;
      transition: all 0.3s;
      color: @text-color;
    }
  }
  .hidden {
    opacity: 0;
  }
}
</style>