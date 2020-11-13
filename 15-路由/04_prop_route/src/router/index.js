import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter)

const routes = [{
    path: "/",
    redirect: "/me",
  },
  {
    path: "/me/:user",
    component: () => import("@/views/Me"),
    meta: {
      title: "关于我的"
    }
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile"),
    meta: {
      title: "用户档案"
    },
    beforeEnter: (to, from, next) => {
      console.log(111);
      next()
    }
  }
]



const router = new vueRouter({
  routes,
  mode: "history"
})


// 先出发前置 => 再去触发后置

// 前置 钩子  
router.beforeEach((to, from, next) => {
  // 全局 导航守卫 => to 跳转到目标的路由对象
  // from =>  当前准备跳转的路由对象
  // next => 下一步 必须调用 不然就无法继续执行后续的步骤
  console.log("+++");
  document.title = to.matched[0].meta.title
  next()
})

// 后置 钩子
router.afterEach((to, from) => {
  console.log("----");
})

export default router