<!-- 页面布局 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import Header from "../components/header.vue";
import { formatTime } from "../utils/formatdate";
import { ref, onMounted } from "vue";

const nowTime = ref("nowTime");
onMounted(() => {
  setInterval(() => {
    nowTime.value = formatTime(new Date());
  });
});

const value = ref('')
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.common-layout,
.el-container {
  width: 100%;
  height: 100%;
}

:deep(.el-header) {
  padding: 0;
  height: 46px;
}
</style>
