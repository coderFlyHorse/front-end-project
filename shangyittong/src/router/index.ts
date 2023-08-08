import { createRouter, createWebHashHistory } from "vue-router"

export default createRouter({
    history: createWebHashHistory(),
    routes: [

        { path: '/home', component: () => import('@/pages/home/index.vue') },
        { path: '/hospital', component: () => import('@/pages/hospital/index.vue') },
        { path: '/', redirect: '/home' }
    ],
    // 控制滚动条
    scrollBehavior() {
        return {
            left: 0,
            top: 0,

        }
    }
})