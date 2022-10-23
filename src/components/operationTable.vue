<template>
  <div>
    <!-- 公共标题栏 -->
    <div id="title">
      <h1>
        <span>1</span>
        &nbsp; &nbsp; {{titleName}}
      </h1>
      <div>
        <el-button type="primary">新增</el-button>
        <el-button type="warning">批量删除</el-button>
      </div>
    </div>
    <!-- 搜索栏 -->
    <div id="searchBox">
      <el-row :gutter="20">
        <el-col :span="10"><div class="grid-content ep-bg-purple" />
          <div class="inputBox">
            <span>文章标题:</span>
            <el-input v-model="input" placeholder="请输入文章标题" size="large" class="input">
            </el-input>
          </div>
        </el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <div class="selectBox">
          <span>文章类型:</span>
            <el-select v-model="select" placeholder="请选择" style="width: 115px">
              <el-option label="图文" value="1" />
              <el-option label="视频" value="2" />
            </el-select>
          </div>
        </el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple " />
          <div class="buttonBox">
            <el-button type="success">查询</el-button>
            <el-button>重置</el-button>
          </div>
        </el-col>
      </el-row>
        

    </div>
    <!-- 表格 -->
    <div id="form">
      <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        border="true"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="文章标题" width="180">
          <template #default="scope">{{ scope.row.title }}</template>
        </el-table-column>
        <el-table-column property="way" label="发布渠道" width="100" />
        <el-table-column property="channel" label="发布频道" width="160" />
        <el-table-column property="type" label="文章类型"  width="160"/>
        <el-table-column property="key" label="关键词"  width="160"/>
        <el-table-column property="people" label="发布人"  width="160"/>
        <el-table-column property="time" label="发送时间"  width="160"/>
        <el-table-column property="operate" label="操作" />
      </el-table>
      <div class="pageChange">
          <el-pagination
            :currentPage="currentPage4"
            :page-size="pageSize4"
            :page-sizes="[10, 20, 30, 40]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, prev, pager, next, sizes,jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
      </div>
      
    </div>

  </div>
</template>

<script lang="ts" >
  import { ref } from 'vue'
  import { ElTable } from 'element-plus'
  interface User {
  date: string
  name: string
  address: string
}
  const input = ref('')
  export default {
  data () {
    return {
      titleName:"文章管理",
      tableName:"我麻了",
      currentPage: 1, //默认页码为1
      pagesize: 10, //默认一页显示10条 
      // totalPage:Math.ceil(this.tableData.length / this.pageSize) || 1,
      tableData: [
  {
    title: '对于年龄，你焦虑吗？',
    way: '小程序',
    channel: '今日热点',
    type:'图文',
    key:'年龄',
    people:'管理员',
    time:'2020-11-2',
    operate:'详情'
  },
  {
    title: '针对新引进应届大学生推出租房补贴',
    way: '小程序',
    channel: '今日热点',
    type:'图文',
    key:'年龄',
    people:'管理员',
    time:'2020-11-2',
    operate:'详情'
  },
  {
    title: '中小微、个体户，这些扶持政策必看！',
    way: '小程序',
    channel: '今日热点',
    type:'图文',
    key:'年龄',
    people:'管理员',
    time:'2020-11-2',
    operate:'详情'
  },
  {
    title: '冬奥餐桌上老外喜欢这道最日常的菜',
    way: '小程序',
    channel: '今日热点',
    type:'图文',
    key:'年龄',
    people:'管理员',
    time:'2020-11-2',
    operate:'详情'
  },
  {
    title: '冬奥会临近，疫情防控有哪些注意事项',
    way: '小程序',
    channel: '今日热点',
    type:'视频',
    key:'年龄',
    people:'管理员',
    time:'2020-11-2',
    operate:'详情'
  },
  {
    title: '浙江新增境外输入确诊病例2例',
    way: '小程序',
    channel: '今日热点',
    type:'图文',
    key:'年龄',
    people:'管理员',
    time:'2020-11-2',
    operate:'详情'
  },
  {
    title: '印度靠捡美国垃圾造出新科技',
    way: '小程序',
    channel: '今日热点',
    type:'视频',
    key:'年龄',
    people:'管理员',
    time:'2020-11-2',
    operate:'详情'
  },

]
    };
  },

  components: {},

  computed: {},

  mounted() {
    const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
  },
  methods: {
    handleSizeChange: function (size) {
//一页显示多少条
this.pagesize = size;
},
handleCurrentChange: function (currentPage) {
//页码更改方法
this.currentPage = currentPage;
}


  }
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}


</script>
<style scoped>
  #title{
    margin: 10px;
    background-color: white;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
  #title h1{
    margin-left:45px;
    display: inline-block;
  }
  #title h1 span{
    display: inline-block;
    width: 10px;
    height: 30px;
    color: #5e80ea;
    line-height: 30px;
    background-color: #5e80ea;
  }
  #title div{
    margin-right: 30px;
  }
  #searchBox{
    height: 100px;
    line-height: 100px;
    background-color: white ;
    margin-left: 10px;
    margin-right: 10px;
  }
 
  #form{
    margin-left :10px;
    margin-right:10px; 
    text-align: center;
    background-color: white;
  }
  .pageChange{
    margin-top: 20px;
    padding-left: 50px;
  }
  .inputBox{
    text-align: center;
  }
  .inputBox span{
    margin-right: 20px;
  }
  .input{
    width: 300px;
  }
  .selectBox span{
    margin-right: 20px;
  }
  .buttonBox{
    text-align: center;
  }
</style>