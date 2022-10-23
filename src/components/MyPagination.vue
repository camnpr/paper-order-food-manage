<!-- 分页组件 -->
<template>
  <div class="box">
    <el-pagination ref="pagination" :page-sizes="[10, 50, 100, 500]" background="background"
      layout="total,  prev, sizes,pager, next, jumper" :total=total @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
// props的第一个参数;
export default {
  // 接收参数
  props: {
    // 数据总数
    total: {
      type: Number,
      default: 100,
    },
    // 每页显示几条数据
    pageSize: {
      type: Number,
      default: 10,
    },
    // 当前的页数
    pageNo: {
      type: Number,
      default: 1
    },
  },

  setup(props, ctx) {
    // 第2步  接受父组件的参数，并且使用
    // const page = ref()                  //计算出来页数
    // const skipNum = ref()               //填入的跳转页数
    // const newPage = ref()               //当前的页数

    // 切换每页显示多少条触发的事件
    const handleSizeChange = (newSize) => {
      // 触发父元素的自定义事件，携带已经改变的值
      ctx.emit('handleSizeChange', newSize)
    }
    // 切换页码值触发的事件
    const handleCurrentChange = (newPage) => {
      ctx.emit('handleCurrentChange', newPage)
    }


    return {
      handleSizeChange,
      handleCurrentChange

    };
  },
};
</script>

<style scoped>
.box {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: flex-end;
}
</style>
