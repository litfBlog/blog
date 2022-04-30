<!--
 * @Author: litfa
 * @Date: 2022-04-30 15:06:05
 * @LastEditTime: 2022-04-30 19:21:18
 * @LastEditors: litfa
 * @Description: 搜索
 * @FilePath: /blog/src/components/Search/Search.vue
 * 
-->
<script lang="ts" setup>
import { onDeactivated, ref, watch } from 'vue'
import { Search } from '@icon-park/vue-next'
import { keywords as getKeywordsApi } from '@/apis/search'
import { ElMessage } from 'element-plus'
import { filterXSS } from 'xss'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  target: {
    type: String,
    default: '_blank'
  },
  value: {
    type: String
  },
  placeholder: String
})

const focus = ref(false)
const keyword = ref(props.value || '')

interface resultsArr {
  id: number
  title: string
}
const results = ref<resultsArr[]>([])

const getKeywords = async () => {
  const { data: res } = await getKeywordsApi(keyword.value)
  if (res.status == 1) {
    results.value = res.data
  } else {
    ElMessage.error('数据获取失败')
  }
}

let timeout: any = ''
const onInput = () => {
  focus.value = true
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    getKeywords()
  }, 100)
}

// 点击其他位置关闭
const close = () => {
  focus.value = false
}
document.body.addEventListener('click', close)
onDeactivated(() => {
  document.body.removeEventListener('click', close)
})

// 高亮关键字
const highlightKeyword = (value: string) => {
  value = filterXSS(value, { whiteList: {} })
  return value.replaceAll(keyword.value, `<span>${keyword.value}</span>`)
}

// 特殊词监听
const showImg = ref(false)
watch(() => keyword.value, (value) => {
  if (/['"`]\sor\s[\d\w]\s*=\s*[\d\w]/.test(value)) {
    showImg.value = true
    console.log(showImg.value)
  } else {
    showImg.value = false
  }
})

const submit = (keyword: string) => {
  if (props.target == '_blank') {
    let link = router.resolve({
      path: '/search',
      query: {
        w: keyword
      }
    })
    window.open(link.fullPath)
  } else {
    router.push(`/search?w=${keyword}`)
  }
}
</script>

<template>
  <div class="search-position" @click.stop="focus = true; getKeywords()">
    <div class="search" :class="{ focus }">
      <div class="input">
        <input
          type="text"
          :placeholder="placeholder"
          v-model="keyword"
          @input="onInput"
          @keyup.enter="submit(keyword)"
        />
        <search theme="outline" size="24" fill="#333" class="icon" @click="submit(keyword)" />
      </div>

      <div class="results">
        <img v-if="showImg" src="@/assets/niHenYong.jpg" alt="听说你很勇哦！" />
        <div class="item" v-for="i in results" :key="i.id">
          <router-link :to="`/search?w=${i.title}`" :target="target">
            <div class="title" v-html="highlightKeyword(i.title)"></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-position {
  height: 38px;
  position: relative;
}
.search {
  position: absolute;
  top: 0;
  width: 100%;
  height: 38px;
  background-color: #ececec;
  border-radius: 5px;
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    background-color: #efefef;
  }
  * {
    transition: all 0.3s;
  }
  .input {
    position: relative;
    border-radius: 5px;
    input {
      width: 100%;
      height: 35px;
      outline: none;
      padding: 10px;
      box-sizing: border-box;
      border: none;
      background-color: rgba(255, 255, 255, 0);
      color: @text-color-line;
    }
    .icon {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto 15px;
      display: flex;
      align-items: center;
    }
  }
  .results {
    margin: 10px;
    overflow-y: scroll;

    img {
      width: 100%;
    }
    .item {
      padding: 15px 10px;
      box-sizing: border-box;
      &:hover {
        background-color: #f0f0f0;
      }
      .title {
        :deep(span) {
          color: @primary;
        }
      }
    }
  }
}

.focus {
  height: auto;
  min-height: 100px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px #aaaa;

  &:hover {
    background-color: #ffffff;
  }

  .input {
    padding: 8px;
    box-sizing: border-box;
    input {
      border-radius: 5px;
      background-color: #f0f0f0;
      color: @text-color;
    }
  }
}
</style>