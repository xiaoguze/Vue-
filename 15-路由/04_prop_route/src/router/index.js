import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter)

const routes = [
  {
    path:"/",
    redirect:"/me"
  }
  ,
  {
    path:"/me/:user",
    component: () => import("@/views/Me")
  },
  {
    path:"/profile",
    component: () => import("@/views/Profile")
  }
]

export default new vueRouter({
  routes,
  mode:"history"
})