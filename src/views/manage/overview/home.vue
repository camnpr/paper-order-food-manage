<!-- 欢迎界面 -->
<template>
  <el-container>
    <el-container>
      <!-- 右侧内容 -->
      <el-main>
        <!-- 页面右侧视图 -->
        <div class="router-view-box">
          <h1 class="start-use-info">欢迎使用网上订餐系统</h1>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { reactive } from "@vue/reactivity";
import VChart from "vue-echarts";
import { ref } from "vue";
import * as ElIcons from "@element-plus/icons-vue";

</script>

<style scoped>
.down-box {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.router-view-box {
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.start-use-info {
  font-size: 30px;
}
</style>