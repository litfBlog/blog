<!--
 * @Author: litfa
 * @Date: 2022-02-17 17:04:04
 * @LastEditTime: 2022-04-29 15:48:36
 * @LastEditors: litfa
 * @Description: 文章卡片
 * @FilePath: /blog/src/components/Card/Card.vue
 * 
-->
        
<script lang="ts" setup>
import propNames from './props'
import { useRouter } from 'vue-router'
import { ThumbsUp, PreviewOpen, Comment, More, Caution, FileEditingOne } from '@icon-park/vue-next'
import formatDate from '@/utils/formatDate'
import { report as Report } from '@/components/Report/report'
import { useCounterStore } from '@/store/index'
import { computed } from 'vue'

const store = useCounterStore()

const props = defineProps(propNames)
const router = useRouter()
const size = 18

const report = (reportId: number, type: 'articles' | 'user' | 'comment') => {
  Report({
    open: true,
    reportId,
    type
  })
}

const isAuthor = computed(() => {
  return store.isLogin && store.id == props.author
})
</script>

<template>
  <router-link
    class="card"
    :class="{ shadow: props.viewShadow }"
    :to="`/p/${props.id}`"
    target="_blank"
  >
    <div class="user" v-if="props.viewAuthor">
      <el-image class="avatar" :src="avatar" fit="cover"></el-image>
      <div class="info">
        <span class="username">{{ username }}</span>
        <span class="date">{{ createDate ? formatDate(createDate) : '' }}</span>
      </div>
    </div>
    <div class="articles">
      <div class="text">
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
      </div>
      <el-image v-if="cover" class="cover" :src="cover" fit="cover" lazy></el-image>
    </div>
    <div class="icons">
      <!-- <div class="item">
        <preview-open theme="filled" :size="size" fill="var(--text-color-line)" />9
      </div>-->
      <div class="item">
        <thumbs-up theme="filled" :size="size" fill="var(--text-color-line)" />
        {{ props.likesCount }}
      </div>
      <div class="item">
        <comment theme="filled" :size="size" fill="var(--text-color-line)" />
        {{ props.commentCount }}
      </div>
      <div class="item">
        <el-popover placement="top" :width="30" trigger="hover">
          <template #reference>
            <more theme="filled" :size="size" fill="var(--text-color-line)" />
          </template>
          <div class="buttons">
            <el-button @click="report(Number(props.id), 'articles')">
              <el-icon style="margin-right: 8px;">
                <Caution></Caution>
              </el-icon>举报
            </el-button>
            <el-button v-if="isAuthor" @click="router.push(`/edit?id=${id}`)">
              <el-icon style="margin-right: 8px;">
                <file-editing-one />
              </el-icon>编辑
            </el-button>
          </div>
        </el-popover>
      </div>
    </div>
  </router-link>
</template>

<style lang="less" scoped>
@import "./card.less";
</style>