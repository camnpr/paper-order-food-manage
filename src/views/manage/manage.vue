<!-- 运营管理 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" name="asideMenu" class="Aside">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#415c85"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          unique-opened
          router
        >
        <el-menu-item>
          
            <template #title>
              <router-link to='/home'>
                 <el-icon>
                   <HomeFilled />
                 </el-icon>
                 <span>概况</span>
              </router-link>
            </template>
          
          </el-menu-item>
        <el-sub-menu 
            :index="item.id.toString()"
            v-for="(item, index) in menuData"
            :key="item.id">
            <template #title>
              <el-icon>
                <component :is="iconList[index]"></component>
              </el-icon>
              <span>{{ item.authName }}</span>
            </template>
              <el-menu-item 
              :index="childrenItem.path"
              v-for="childrenItem in item.children"
              :key="childrenItem.id">
                <span>{{ childrenItem.authName }}</span>
              </el-menu-item>
          </el-sub-menu>

        </el-menu>
      </el-col>
    </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts">
import { reactive } from "@vue/reactivity";

// 页面左侧菜单数据
export default{
  name:"operation",
  setup(){
    const menuData = reactive([
    {
      id: 2,
      authName: "菜单中心",
      children: [
        { id: 201, authName: "菜单分类管理", path: "/menuClass" },
        { id: 202, authName: "菜单管理", path: "/menuList" },
        { id: 203, authName: "菜单评论管理", path: "/menuComment" },
      ],
    },
    {
      id: 3,
      authName: "订单中心",
      children: [
        { id: 301, authName: "订单管理", path: "/orderList" },
        { id: 302, authName: "订单评价管理", path: "/orderRate" },
      ],
    },
    {
      id: 4,
      authName: "用户中心",
      children: [
        { id: 401, authName: "用户管理", path: "/userManage" },
      ],
    },
    ]);
    const iconList = reactive([
      "Reading", 
      "Briefcase",
      "Avatar",
      "OfficeBuilding",
      "DocumentCopy"
    ]);
    return{
      menuData,
      iconList
    }
  }
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style scoped>
  .el-container  {
  height: 100%;
} 

.Aside{
  background-color: #415c85;
}
.el-menu-vertical-demo{
    width: 200px;
}
.el-menu{
  border-right: none;
}
.el-main {
  margin: 0;
  padding: 0;
  background-color: #eee;
}
</style>