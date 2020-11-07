// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
console.log(App);
Vue.config.productionTip = false

/* eslint-disable no-new */
// template
new Vue({
  el: '#app',
  // components: { App },
  // 为什么 比 使用template 去节约 大小 
  // 这样 省去了 template 编译的过程的代码 不需要这一段代码 就节约了版本的大小
  render: function (createElement) {
    // 1 => 普通用法: createElement("标签" , "标签的属性" , 内容是数组[])
    // return createElement('h2',{class:"box"},['hello',createElement('button',['按钮'])])

    // 2 => 传入一个组件用法
    return createElement(App)
  },
  components: {
    App
  }
})
