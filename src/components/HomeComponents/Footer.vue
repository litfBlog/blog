<!--
 * @Author: litfa
 * @Date: 2022-04-08 18:56:38
 * @LastEditTime: 2022-04-12 14:59:29
 * @LastEditors: litfa
 * @Description: 底部信息
 * @FilePath: /blog/src/components/HomeComponents/Footer.vue
 * 
-->
<script lang="ts" setup>
import dayjs from 'dayjs'
const icons = ['qq', '微信', 'github', 'email']
</script>

<template>
  <div class="Footer">
    <div class="copyright">©2021-{{ dayjs().format('YYYY') }} litfa all rights reserved.</div>
    <div class="icp">
      <a href="https://beian.miit.gov.cn/">豫ICP备2021024510号-2</a>
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=4101820200807">
        <img src="./../../assets/icp.png" />
        豫公网安备 4101820200807号
      </a>
    </div>
    <div class="contact">
      <el-popover placement="top-start" :width="200" trigger="hover">
        <template #reference>
          <div class="icon" style="background-color: #12b7f5"></div>
        </template>
        <div class="popover-box">
          <a
            href="https://qm.qq.com/cgi-bin/qm/qr?k=KhU1Ifs9GAuPaHfsGMHM4nUst9pR58Uj&noverify=0"
          >1585380249</a>
          <img src="./../../assets/qq.png" alt="qq" />
        </div>
      </el-popover>
      <el-popover placement="top-start" :width="200" trigger="hover">
        <template #reference>
          <div class="icon" style="background-color: #2aae67;"></div>
        </template>
        <div class="popover-box">
          Litfa_
          <img src="./../../assets/wx.png" alt="wx" />
        </div>
      </el-popover>
      <el-popover placement="top-start" :width="200" trigger="hover">
        <template #reference>
          <div class="icon" style="background-color: #000;"></div>
        </template>
        <a href="https://github.com/litfa" target="_black">https://github.com/litfa</a>
      </el-popover>
      <el-popover placement="top-start" :width="200" trigger="hover">
        <template #reference>
          <div class="icon" style="background-color: #ecb10c;"></div>
        </template>
        <a href="mailto:admin@litf.com.cn">admin@litf.com.cn</a>
      </el-popover>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Footer {
  font-size: 14px;
  word-break: break-all;
  flex-wrap: wrap;
  color: #000a;
  .icp {
    display: flex;
    flex-direction: column;
    // align-items: center;
    img {
      margin-right: 3px;
    }
    a {
      display: flex;
      align-items: center;
    }
  }
  .contact {
    display: flex;
    margin-top: 10px;
    box-sizing: border-box;
    .icon {
      width: 30px;
      height: 30px;
      background-color: blue;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      &::after {
        content: "";
        width: 20px;
        height: 20px;
        display: block;
        background-image: url(./../../assets/icon.png);
        background-size: 20px;
      }
      &:nth-child(1)::after {
        background-position-y: 0;
      }
      &:nth-child(2)::after {
        background-position-y: -20px;
      }
      &:nth-child(3)::after {
        background-position-y: -40px;
      }
      &:nth-child(4)::after {
        background-position-y: -60px;
      }
    }
  }
}
.popover-box {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  img {
    width: 80%;
  }
}
</style>