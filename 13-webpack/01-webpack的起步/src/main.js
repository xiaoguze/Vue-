// webpack 可以使用 common.js 和 ES6 的模块化 规范
const {add , sum} = require('./mathUntil.js')
import {name , age ,height} from './mathUntil.js'
console.log(add(1,2));
console.log(sum(1,2));
console.log(name);
console.log(age);
console.log(height);
console.log("我设置了文件路径 值用webpack 即可");