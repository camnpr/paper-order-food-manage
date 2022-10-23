<template>
    <el-container>
      <el-header>
        <div class="title">
          <span class="headerimg"></span>
          <span class="headerTitle">文章内容新增</span>
        </div>
        <span>
          <router-link to='/article'>
           <el-button type="warning" >返回</el-button>
          </router-link>
        </span>
      </el-header>
      <el-container style="padding: 3% 5%">
        <!-- 左侧表单 -->
        <el-aside style="width: 40%">
          <div class="leftFormBox">
            <el-form label-width="120px" :model="FormData" style="max-width: 460px" :rules="rules">
              <el-form-item label="文章标题：" prop="name">
                <el-input v-model="FormData.title" placeholder="请输入文章标题" size="large"/>
              </el-form-item>
              <el-form-item label="发布渠道：" >
                <el-input  v-model="FormData.releaseWay" placeholder="请输入发布渠道" size="large" />
              </el-form-item>
              <el-form-item label="发布频道：" >
                <el-input  v-model="FormData.releaseChannel" placeholder="请输入发布频道" size="large" />
              </el-form-item>
              <el-form-item label="文章类型：" >
                <el-input  v-model="FormData.type" placeholder="请输入文章类型" size="large" />
              </el-form-item>
              <el-form-item label="关键词语：" >
                <el-input  v-model="FormData.keyword" placeholder="请输入关键词" size="large" />
              </el-form-item>
              <el-form-item label="文章简介：" >
                <el-input  v-model="FormData.synopsis" placeholder="请输入文章简介" size="large" />
              </el-form-item>
            </el-form>
          </div>
        </el-aside>
        <!-- 右侧表单 -->
        <el-main style="margin-left: 2%">
          <div class="rightFormBox">
            <el-form :model="FormData" label-width="120px" :inline="true">
             <el-form-item label="文章内容：" >
                <el-input v-model="FormData.content" style="width: 400px" placeholder="请输入文章内容" :rows="14" type="textarea"/>
              </el-form-item>
            </el-form>
          </div>
        </el-main>
      </el-container>
      <el-row justify="center" class="buttonBox">
        <el-col :span=" 2">
          <el-button type="primary" size="large" @click="save">保存</el-button>
        </el-col>
        <el-col :span="2">
          <el-button size="large" @click="cancel">重置</el-button>
        </el-col>
      </el-row>
    </el-container>
  </template>
  
  <script setup>
  import { reactive, ref } from "@vue/reactivity";
  import { ElMessageBox } from "element-plus";
  import { useRouter } from "vue-router";
  import { addArticle } from "../../../api/operation.js"
  const $router = useRouter();
  //左侧数据
  const FormData = reactive({
    content:'',
    cover:'XX',
    keyword: "",
    releaseChannel: "",
    releasePerson:"管理员",
    releaseTime:"2022-9-14",
    releaseWay: '',
    synopsis:"",
    title: "",
    type:""
  });
  const save = () => {
   console.log(FormData)
   addData()
};
const cancel = () => {
  FormData.keyword=""
  FormData.content=''
  FormData.releaseChannel=''
  FormData.releaseWay=''
  FormData.synopsis=''
  FormData.title=''
  FormData.type=''
};
// 添加数据的异步函数
async function addData() {
  // 发送请求 接受请求回来的数据 并且重命名为 res
  const { data: res } = await addArticle(FormData)
  console.log(res)

}
  

  
  </script>
  
  <style lang="scss" scoped>
  .el-container {
    background-color: #fff;
  
    .el-header {
      border-bottom: 10px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 55px 0 35px;
  
      .title {
        height: 100%;
        display: flex;
        align-items: center;
  
        .headerTitle {
          font-size: 20px;
          font-weight: 700;
          margin-left: 30px;
        }
  
        .headerimg {
          display: inline-block;
          width: 10px;
          height: 28px;
          background-color: rgba(72, 110, 231, 0.87843137254902);
        }
      }
    }
  }
  
  .el-main {
    margin: 0;
    padding: 0;
  }
  
  // 左侧表单盒子
  .leftFormBox {
    border: 1px solid #000;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 5%;
    font-size: 20px;
  }
  
  // 右侧表单盒子
  .rightFormBox {
    padding: 5%;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  
    border: 1px solid #000;
  }
  
  .buttonBox {
    bottom: 5%;
  
  }
  </style>
  