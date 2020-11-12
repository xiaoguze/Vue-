<template>
  <div id="app">
    <router-link :to="/me/+user">关于我的</router-link>
    <router-link :to="{path:'/profile' , query:{name:'小泽',id:'1',height:'1.88'}}">用户信息</router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"App",
  data(){
    return{
      user:"lisi"
    }
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
</style>
