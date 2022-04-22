<!--
 * @Author: litfa
 * @Date: 2022-04-22 16:04:33
 * @LastEditTime: 2022-04-22 17:13:48
 * @LastEditors: litfa
 * @Description: 路由跳转
 * @FilePath: /blog/src/components/MyRouterLink/MyRouterLink.vue
 * 
-->
<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { useLink, useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  target: {
    type: String,
    default: '_self',
    validator(value: string) {
      return ['_self', '_blank', '_parent', '_top'].includes(value)
    }
  }
})

// const link = computed((): string => {
//   if (typeof props.to == 'string') {
//     return props.to
//   }
//   return router.resolve(props.to).href
// })
const link = reactive(useLink(props))
</script>

<template>
  <a :href="link.href" :target="props.target" @click="link.navigate">
    <slot></slot>
  </a>
</template>