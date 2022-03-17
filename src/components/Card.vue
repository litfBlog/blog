<!--
 * @Author: litfa
 * @Date: 2022-02-17 17:04:04
 * @LastEditTime: 2022-03-17 17:41:55
 * @LastEditors: litfa
 * @Description: 文章卡片
 * @FilePath: /blog/src/components/Card.vue
 * 
-->
<template>
  <div class="card">
    <div class="user">
      <el-image class="avatar" :src="avatar" fit="cover"></el-image>
      <div class="info">
        <span class="username">{{ username }}</span>
        <span class="date">{{ date ? formatDate(date) : '' }}</span>
      </div>
    </div>
    <div class="articles">
      <el-image
        class="cover"
        src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        fix="cover"
      ></el-image>
      <div class="text">
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
      </div>
    </div>
    <div class="icons">
      <div class="item">
        <preview-open theme="filled" :size="size" fill="#97a2ab" />9
      </div>
      <div class="item">
        <thumbs-up theme="filled" :size="size" fill="#97a2ab" />3
      </div>
      <div class="item">
        <comment theme="filled" :size="size" fill="#97a2ab" />0
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ThumbsUp, PreviewOpen, Comment } from '@icon-park/vue-next'
import formatDate from '@/utils/formatDate'
const size = 18
const props = defineProps({
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  username: {
    type: String
  },
  date: {
    type: [Number, String]
  },
  title: {
    type: String
  },
  desc: {
    type: String
  }
})
</script>

<style lang="less" scoped>
.card {
  max-width: 700px;
  height: 200px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  margin: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.user {
  display: flex;
  align-items: center;
  .avatar {
    width: 50px;
    border-radius: 50%;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    .username {
      font-weight: 600;
    }
    .date {
      font-size: 12px;
      color: #666;
    }
  }
}
.articles {
  display: flex;
  margin-left: 56px;
  flex: 1;
  flex-shrink: 0;
  .cover {
    width: 180px;
    border-radius: 12px;
    flex-shrink: 0;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-overflow: ellipsis;
    height: 100%;
    h3,
    p {
      margin: 5px 0 5px 10px;
    }
    p {
      flex-shrink: 0;
      height: 3.8em;
      max-height: 3.8em;

      white-space: wrap;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}

.icons {
  display: flex;
  margin: 10px 0 5px 56px;
  .item {
    margin-right: 10px;
    display: flex;
    align-items: center;
    color: #97a2ab;
    .i-icon {
      margin-right: 2px;
    }
  }
}
</style>