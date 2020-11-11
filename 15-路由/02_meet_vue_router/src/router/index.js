import vueRouter from 'vue-router' // 引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
//  使用 vue.use 安装插件
Vue.use(vueRouter) // 安装插件


const routes = [
  // 配置 路径和组件的映射关系
  {
    path:"/",
    redirect:"/home" // 重定向 
  },
  {
    path:"/home", // 组件的url路径
    component:() => import('@/views/Home.vue'), // 组件文件
    name:"主页"
  },
  {
    path:"/about",
    component:() => import('@/views/About.vue'),
    name:"关于"
  },
  {
    path:"/user/:userId", // 可以增加动态路由
    component:() => import("@/views/User.vue"),
    name:"用户信息"
  }
]


// 创建 vue-router 对象
const router = new VueRouter({
  routes,
  mode:"history", // 更改 路由的模式
  linkActiveClass:"active" // 当前路由处于活跃的 class 类名
})

// 将 router 对象传入到 vue实例中
export default router