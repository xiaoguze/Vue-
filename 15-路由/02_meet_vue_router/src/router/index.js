import vueRouter from 'vue-router' // 引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
//  使用 vue.use 安装插件
Vue.use(vueRouter) // 安装插件


const routes = [
  // 配置 路径和组件的映射关系
]


// 创建 vue-router 对象
const router = new VueRouter({
  routes
})

// 将 router 对象传入到 vue实例中
export default router