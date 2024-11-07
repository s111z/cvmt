import { createRouter, createWebHistory } from 'vue-router'


import main from "@/views/main.vue"
import commit from "@/views/commit.vue"
import show from "@/views/show.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'commit',
      component:commit,
    },
    // {
    //   path: '/commit',
    //   name:'commit',
    //   component: commit,
    // },
    {
      path: '/main',
      name:'main',
      component: main,
    },
    {
      path: '/show/:videoUrl*', // 使用 * 表示可以匹配任意长度的路径参数
      name: 'show',
      component: show
    }
  ]
})
export default router
