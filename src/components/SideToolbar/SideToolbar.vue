<!--
 * @Author: litfa
 * @Date: 2022-04-01 16:06:13
 * @LastEditTime: 2022-04-03 16:38:27
 * @LastEditors: litfa
 * @Description: 文章侧边工具栏
 * @FilePath: /blog/src/components/SideToolbar/SideToolbar.vue
 * 
-->
<script lang="ts" setup>
import { ref } from 'vue'
import Icon from './Icon/Icon.vue'
import { ThumbsUp, Up, Star } from '@icon-park/vue-next'
import { ElBacktop } from 'element-plus'
import scrollObserver from '@/utils/scrollObserver'
import likeApi from '@/apis/like'
import { useRoute } from 'vue-router'

const route = useRoute()

const isScroll = ref(false)

// 是否滚动useScroll(document.body)
scrollObserver(document.body, (e: boolean): void => {
  console.log(e, '1')
  isScroll.value = e
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
</script>

<template>
  <div class="SideToolbar">
    <div class="SideBar" :class="{ hidden: isScroll }">
      <div class="box">
        <Icon :count="props.likes ? props.likes : 0" @click="like">
          <ThumbsUp
            theme="outline"
            :size="size"
            fill="#333"
            :stroke-width="3"
            :class="{ liked: props.liked }"
          />
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
    transition: all 0.3s;
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
  .hidden {
    opacity: 0;
  }
}
</style>