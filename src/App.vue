<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import { defineComponent } from 'vue'
import getUserInfo from '@/utils/getUserInfo'
export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    getUserInfo()
  }
})
</script>
<style lang="less">
.navBar {
  position: sticky;
  top: 0;
}
</style>