export default [
    {
        path:'/operation',
        name: 'operation',
        component: () => import('../views/operation/operation.vue'),
        children:[
           //文章管理
           {
              path: '/article',
              component: () => import('../views/operation/content/article.vue')
           },
           {
            path: '/comment',
            component: () => import('../views/operation/content/comment.vue')
           }


        ]
    }
]