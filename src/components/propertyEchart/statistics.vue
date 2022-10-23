<template>
  <!-- 次数统计折线图 -->
  <div class="echart" ref="chart"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "vue";
// echarts
//1.通过vue3.x中的refs标签用法，获取到container容器实例
const chart = ref(null);
//2.定义在本vue实例中的echarts实例
let myEcharts = reactive({});
//4.定义好echarts的配置数据
let option = {
  // 鼠标经过的提示信息
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [200, 250, 350, 454, 350, 480, 310, 999, 200, 555, 999, 566],
      type: "line",
      smooth: true,
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(53,162,177, 0.8)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(180,187,231, 0.8)", //   100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  ],
};
//onMounted钩子函数
onMounted(() => {
  //初始化echarts
  init();
});

//初始化echarts实例方法
const init = () => {
  //3.初始化container容器
  myEcharts = echarts.init(chart.value);
  //5.传入数据
  myEcharts.setOption(option);
  //additional：图表大小自适应窗口大小变化
  window.addEventListener("resize", () => {
    myEcharts.resize();
  })
};
</script>

<style scoped>
.echart {
  box-sizing: border-box;
  height: 260px;
  margin: 0 auto;
}
</style>
