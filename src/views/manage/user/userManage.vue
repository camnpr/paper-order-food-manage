<!-- 租户信息管理 -->
<template>
  <div>
    <!-- 公共标题栏 -->
    <div id="title">
      <h1>
        <span>1</span>
        &nbsp; &nbsp; {{titleName}}
      </h1>
      <div>
        <el-button type="primary" @click="addUser">新增</el-button>
        <el-button type="warning">批量删除</el-button>
      </div>
    </div>
    <!-- 弹窗 -->
    <el-dialog v-model="dialogFormVisible" title="文章内容新增" width="80%" top="8vh" class="popUp">
       <template #footer>
        <el-button type="primary" @click="addOk">确定</el-button>
        <el-button @click="addCancel">取消</el-button>
       </template>
    </el-dialog>
    <!-- 搜索栏 -->
    <div id="searchBox">
      <el-row :gutter="20">
        <el-col :span="10"><div class="grid-content ep-bg-purple" />
          <div class="inputBox">
            <span>租户名称:</span>
            <el-input v-model="inputContent" placeholder="请输入文章标题" size="large" class="input"
            prefix-icon="el-icon-search">
            </el-input>
          </div>
        </el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <div class="selectBox">
          <span>所属楼宇:</span>
            <el-select v-model="select" placeholder="请选择" style="width: 115px">
              <el-option label="A1幢" value="1" />
              <el-option label="B2幢" value="2" />
              <el-option label="C2幢" value="3" />
            </el-select>
          </div>
        </el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple " />
          <div class="buttonBox">
            <el-button slot="append" type="success" @click="searchput">查询</el-button>
            <el-button @click="reStart">重置</el-button>
          </div>
        </el-col>
      </el-row>
        

    </div>
    <!-- 表格 -->
    <div id="form">
      <el-table
        ref="multipleTableRef"
        :data="tables[0].slice((currentPage - 1) * pageSize, currentPage*pageSize)"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        border="true"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="租户名称" width="260">
          <template #default="scope">{{ scope.row.companyName }}</template>
        </el-table-column>
        <el-table-column property="building" label="所属楼宇" width="100" />
        <el-table-column property="room" label="房间名称" width="120" />
        <el-table-column property="type" label="合同类型"  width="120"/>
        <el-table-column property="principal" label="负责人"  width="120"/>
        <el-table-column property="tel" label="联系方式"  width="120"/>
        <el-table-column property="registerTime" label="注册时间"  width="140"/>
        <el-table-column property="operate" label="操作" >
          <el-button text bg>详情</el-button>
          <el-button text bg>删除</el-button>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="pageChange">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            :small="small"
            background="true"
            layout="prev, pager, next"
            :total="count"

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

  export default {
  data () {
    return {
      dialogFormVisible:false,
      titleName:"租户信息管理",
      tableName:"我麻了",
      currentPage: 1,
      pageSize: 6,
      searchContent:'',
      inputContent:'',
      // totalPage:Math.ceil(this.tableData.length / this.pageSize) || 1,
      formData:{
        acTitle:"",
        acWay:"",
        acChannel:"",
        acType:"",
        acKey:"",
        acPeople:"",
        acTime:"",
        acSynopsis:""
      },
      tableData: [
  {
    id:'1',
    companyName: '杭州久碳科技有限公司',
    building: 'C2幢',
    room: '206',
    type:'续签',
    state:'生效中',
    startTime:'2020-05-17',
    endTime:'2022-01-23',
    operate:'详情',
    principal:'张旭',
    tel:'18767256412',
    registerTime:'2019-01-01'
  },
  {
    id:'2',
    companyName: '杭州麟云科技有限公司',
    building: 'A1幢',
    room: '308',
    type:'新签',
    state:'生效中',
    startTime:'2020-05-17',
    endTime:'2022-01-23',
    operate:'详情',
    principal:'李君虞',
    tel:'13988445628',
    registerTime:'2019-01-01'
  },
  {
    id:'3',
    companyName: '杭州数溪科技有限公司',
    building: 'B2幢',
    room: '507',
    type:'续签',
    state:'生效中',
    startTime:'2020-05-17',
    endTime:'2022-01-23',
    operate:'详情',
    principal:'李菲菲',
    tel:'15924916412',
    registerTime:'2019-01-01'
  },
  {
    id:'4',
    companyName: '南京可达鸭娱乐有限公司',
    building: 'B2幢',
    room: '801',
    type:'续签',
    state:'到期',
    startTime:'2020-05-17',
    endTime:'2022-01-23',
    operate:'详情',
    principal:'张倩倩',
    tel:'18767256411',
    registerTime:'2019-01-01'
  },
  { 
    id:'5',
    companyName: '杭州起梦科技有限公司',
    building: 'B2幢',
    room: '1201',
    type:'续签',
    state:'退租',
    startTime:'2020-05-17',
    endTime:'2022-01-23',
    operate:'详情',
    principal:'陆灵玉',
    tel:'18767256412',
    registerTime:'2019-01-01'
  },
  {
    id:'6',
    companyName: '杭州氧屋东西科技有限公司',
    building: 'A1幢',
    room: '1405',
    type:'续签',
    state:'生效中',
    startTime:'2020-05-17',
    endTime:'2022-01-23',
    operate:'详情',
    principal:'张旭',
    tel:'18767256412',
    registerTime:'2019-01-01'
  },
  {
    id:'7',
    companyName: '喵兜兜（杭州）科技有限公司',
    building: 'C2幢',
    room: '601',
    type:'续签',
    state:'生效中',
    startTime:'2020-05-17',
    endTime:'2022-01-23',
    operate:'详情',
    principal:'张旭',
    tel:'18767256412',
    registerTime:'2019-01-01'
  },

]
    };
  },

  components: {},

  computed: {
    tables() {
              const search = this.searchContent;
                if(this.inputContent==''){
                 this.searchContent=''
                 this.currentPage=1
                return [this. tableData,this.count=this. tableData.length];
                }
                 if (search!=='') {
                   return [this. tableData.filter((dataNews) => {
                     return Object.keys(dataNews).some((key) => {
                       return String(dataNews[key]).toLowerCase().indexOf(search) > -1;
                     });
                   }),
                       this.count = this. tableData.filter((dataNews) => {
                     return Object.keys(dataNews).some((key) => {
                       return String(dataNews[key]).toLowerCase().indexOf(search) > -1;
                     });
                   }).length];
                 }
                 return [this. tableData,this.count=this. tableData.length];
              }
  },
  methods: {
    addUser(){
      this.dialogFormVisible=true
    },
    addOk(){
      this.dialogFormVisible=false
    },
    addCancel(){
      this.dialogFormVisible=false
    },
    handleSizeChange(val){
        this.pageSize=val;
      },
      handleCurrentChange(val){
        this.currentPage=val;
    },
    searchput(){
      this.searchContent=this.inputContent
      console.log(this.searchContent)
    },
    reStart(){
     this.inputContent=''
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



</script>
<style scoped>
  #title{
    margin-left:20px;
    margin-right: 15px;
    margin-top:20px;
    margin-bottom: 10px;
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
    margin-left: 20px;
    margin-right: 15px;
  }
 
  #form{
    margin-left :20px;
    margin-right:15px; 
    text-align: center;
    background-color: white;
  }
  .pageChange{
    margin-top: 40px;
    padding-left: 550px;
    height: 200px;

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
  .popUp{
    width: 1200px;
  }
</style>