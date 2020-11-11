<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <!-- router-link =>  to 属性指向组件的路由 可以切换到指定的路由组件    tag => 可以将 router-link 该标签渲染成什么标签  默认为 a 标签
      增加 replace 属性 => 表示 就是没有 访问记录  可以增加一个属性  =>  active-class => 表示当前 活跃时 的class 赋值的样式
     -->
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户信息</router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"App",
  data(){
    userId:"zhansan"
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.active{
  color: red;
}
</style>
