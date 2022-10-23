
// import manageRouter from './manage'

import { createRouter, createWebHashHistory } from 'vue-router'

const manageroutes = [
   {
      path: '/',
      redirect: '/login'
   },
   {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login.vue'),
   },
   {
      path: '/index',
      name: '/index',
      component: () => import('../layout/index.vue'),
      redirect: '/manage',
      children: [
         {
            path: '/manage',
            name: 'manage',
            redirect: '/manage',
            component: () => import('../views/manage/manage.vue'),
            children: [
               //后台首页
               {
                  path: '/home',
                  component: () => import('../views/manage/overview/home.vue')
               },
               //菜单管理
               {
                  path: '/menuClass',
                  component: () => import('../views/manage/menu/menuClass.vue')
               },
               {
                  path: '/menuList',
                  component: () => import('../views/manage/menu/menuList.vue')
               },
               {
                  path: '/menuComment',
                  component: () => import('../views/manage/menu/comment.vue')
               },
               {
                  path: '/menuList',
                  component: () => import('../views/manage/menu/menuList.vue')
               },
               //订单管理
               {
                  path: '/orderList',
                  component: () => import('../views/manage/order/orderList.vue')
               },
               {
                  path: '/orderRate',
                  component: () => import('../views/manage/order/orderRate.vue')
               },
               //用户管理
               {
                  path: '/userManage',
                  component: () => import('../views/manage/user/userManage.vue')
               },
            ]
         },

      ]
   },

]

// 哈希路由
const router = createRouter({
   // 路由模式
   history: createWebHashHistory(),
   routes: manageroutes,
})
/**
 - 输出对象
 */
export default router;