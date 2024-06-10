import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/layout',
        name: 'Layout',
        component: () => import('../views/layout/index.vue'),
        children: [
            {
                path: "/home",
                component: () => import('@/views/home/index'),
                meta:{
                    title:"首页"
                  }
            }, {
                path: "/booktype",
                component: () => import('@/views/book/booktype'),
                meta:{
                    title:"类别管理"
                  }
            },
            , {
                path: "/bookinfo",
                component: () => import('@/views/book/bookinfo'),
                meta:{
                    title:"信息管理"
                  }
            },
            {
                path: "/kucunsearch",
                component: () => import('@/views/kucun/kucunsearch'),
                meta:{
                    title:"库存查询"
                  }
            },
            {
                path: "/chukusearch",
                component: () => import('@/views/kucun/chukusearch'),
                meta:{
                    title:"出库查询"
                  }
            },
            {
                path: "/rukusearch",
                component: () => import('@/views/kucun/rukusearch'),
                meta:{
                    title:"入库查询"
                  }
            },
            {
                path: "/user",
                component: () => import('@/views/user/user'),
                meta:{
                    title:"用户管理"
                  }
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
