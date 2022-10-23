<template>
  <!-- 缴费柱形图 -->
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
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
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
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "费用",
      type: "bar",
      barWidth: "60%",
      data: [200, 400, 1000, 800, 400, 200, 220, 800, 400, 200, 200, 1000],
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
  // window.onresize = () => {
  //   myEcharts.resize();
  // };
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
