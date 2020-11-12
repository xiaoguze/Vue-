import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter)
const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:() => import('@/views/Home.vue'),
    name:"首页",
    children:[
      {
        path:"/",
        redirect:"newsm"
      },
      {
        path:"news",
        component: () => import("@/views/News.vue"),
        name:"news"
      },
      {
        path:"message",
        component: () => import("@/views/Message.vue")
      }
    ]
  },
  {
    path:"/about",
    component: () => import('@/views/About.vue')
  }
]
export default new vueRouter({
  routes,
  mode:"history"
})