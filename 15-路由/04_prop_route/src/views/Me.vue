<template>
  <div>
    <!-- 路由传递参数的方式
        1 => params的类型
          => 配置路由的格式 => /router/:id
          => 传递的方式 => 在path后面跟上对应的值
          => 传递后形成的路径 => /router/123  可以通过 this.$route.params.id 获取 传递的参数

        2 => query的类型
          => 配置路由的哥施 => /router 普通配置即可
          => 传递的方式 => 对象中使用query的key作为传递方式
          => 传递后形成的形式 => /router?id=123  可以通过 this.$route.query.id 来获取 传递的参数 
     -->
     {{$route.params.user}}
     <!-- 通过 $route.params.user 来获取 -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>