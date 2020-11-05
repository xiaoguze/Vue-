const {add , mul} = require('./mathUntil.js')

console.log(add);
console.log(mul);

require('./css/normal.css')
require('./css/specia.less')

document.writeln('<h2>hello world</h2>')


import Vue from 'vue'
import App from './vue/App'
const app = new Vue({
  el:'#app',
  template:"<App/>",
  components:{
    App
  }
})