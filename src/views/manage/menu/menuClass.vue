<!-- 菜单分类管理 -->
<template>
  <div>
    <!-- 公共标题栏 -->
    <div id="title">
      <h1>
        <span>1</span>
        &nbsp; &nbsp; {{titleName}}
      </h1>
      <div>
        <router-link to="/menuEdit?id=0">
          <el-button type="primary">新增</el-button>
        </router-link>
      </div>
    </div>
    <!-- 搜索栏 -->
    <div id="searchBox">
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="grid-content ep-bg-purple"/>
          <div class="inputBox">
            <span>分类标题:</span>
            <el-input
              v-model="inputContent"
              placeholder="请输入分类标题"
              size="large"
              class="input"
              prefix-icon="el-icon-search"
            ></el-input>
          </div>
        </el-col>
        <!-- <el-col :span="6">
          <div class="grid-content ep-bg-purple"/>
          <div class="selectBox">
            <span>分类类型:</span>
            <el-select v-model="select" placeholder="请选择" style="width: 115px">
              <el-option label="图文" value="1"/>
              <el-option label="视频" value="2"/>
            </el-select>
          </div>
        </el-col> -->
        <el-col :span="8">
          <div class="grid-content ep-bg-purple"/>
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
        <el-table-column type="selection" width="55"/>
        <el-table-column label="分类标题">
          <template #default="scope">{{ scope.row.field_title }}</template>
        </el-table-column>
        <el-table-column property="field_index" label="排序号" width="100"/>
        <el-table-column property="create_time" label="创建时间" width="140"/>
        <el-table-column property="operate" label="操作" width="200">
          <template #default="scope">
            <el-button text bg>详情</el-button>
            <el-button text bg @click="delate( scope.row)">删除</el-button>
          </template>
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

<script lang="ts">
import { ref, onMounted, reactive } from "vue";
import { ElTable } from "element-plus";
import { getArticle, cancelArticle } from "../../../api/manage.js";
import { useRouter } from "vue-router";
const $router = useRouter();
interface User {
  date: string;
  name: string;
  address: string;
}
export default {
  data() {
    return {
      dialogFormVisible: false,
      titleName: "菜单分类",
      currentPage: 1,
      pageSize: 6,
      searchContent: "",
      inputContent: "",
      selMsg: [],
      cancelParm: {
        title: ""
      }
    };
  },
  setup() {
    // 访客列表数据
    const tableData1 = reactive([]);
    // 访客列表总数
    let count1 = 0;

    // 获取访客需要的参数
    let getVisitorParms = {
      pageNum: "1", // 获取第几页的数据
      pageSize: "20" // 获取几条数据
    };

    onMounted(() => {
      // 调用获取访客的函数
      getArticleData();
    });
    // 获取访客的异步函数
    async function getArticleData() {
      // 发送请求 接受请求回来的数据 并且重命名为 res
      const { data: res } = await getArticle(getVisitorParms);
      if (res) {
        // 返回的数据展开 push到数组中
        tableData1.push(...res.data);
        // 总数重新赋值
        count1 = res.count;
      } else {
        console.log(res);
      }
    }
    return {
      tableData1
    };
  },
  components: {},

  computed: {
    tables() {
      const search = this.searchContent;
      if (this.inputContent == "") {
        this.searchContent = "";
        this.currentPage = 1;
        return [this.tableData1, (this.count = this.tableData1.length)];
      }
      if (search !== "") {
        return [
          this.tableData1.filter(dataNews => {
            return Object.keys(dataNews).some(key => {
              return (
                String(dataNews[key])
                  .toLowerCase()
                  .indexOf(search) > -1
              );
            });
          }),
          (this.count = this.tableData1.filter(dataNews => {
            return Object.keys(dataNews).some(key => {
              return (
                String(dataNews[key])
                  .toLowerCase()
                  .indexOf(search) > -1
              );
            });
          }).length)
        ];
      }
      return [this.tableData1, (this.count = this.tableData1.length)];
    }
  },
  methods: {
    // addUser(){
    //   this.dialogFormVisible=true
    // },
    addOk() {
      this.dialogFormVisible = false;
    },
    addCancel() {
      this.dialogFormVisible = false;
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    //搜索
    searchput() {
      this.searchContent = this.inputContent;
    },
    // 重置搜索框内容
    reStart() {
      this.inputContent = "";
    },
    //获取选中的行数据
    delate(row) {
      console.log(row.title);
      this.cancelParm.title = row.title;
      console.log(this.cancelParm);
      let pk = this.cancelParm;
      console.log(pk);
      mycancel();
      async function mycancel() {
        // 发送请求 接受请求回来的数据 并且重命名为 res
        const { data: res } = await cancelArticle(pk);
        console.log(res);
        console.log(111);
        location.reload();
      }
    }
  }
};
const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const multipleSelection = ref<User[]>([]);
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach(row => {
      multipleTableRef.value!.toggleRowSelection(row, undefined);
    });
  } else {
    multipleTableRef.value!.clearSelection();
  }
};
</script>
<style scoped>
#title {
  margin-left: 20px;
  margin-right: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: white;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}
#title h1 {
  margin-left: 45px;
  display: inline-block;
}
#title h1 span {
  display: inline-block;
  width: 10px;
  height: 30px;
  color: #5e80ea;
  line-height: 30px;
  background-color: #5e80ea;
}
#title div {
  margin-right: 30px;
}
#searchBox {
  height: 100px;
  line-height: 100px;
  background-color: white;
  margin-left: 20px;
  margin-right: 15px;
}

#form {
  margin-left: 20px;
  margin-right: 15px;
  text-align: center;
  background-color: white;
}
.pageChange {
  margin-top: 40px;
  padding-left: 550px;
  height: 200px;
}
.inputBox {
  text-align: center;
}
.inputBox span {
  margin-right: 20px;
}
.input {
  width: 300px;
}
.selectBox span {
  margin-right: 20px;
}
.buttonBox {
  text-align: center;
}
.popUp {
  width: 1200px;
}
</style>