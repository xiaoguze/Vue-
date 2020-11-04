import {name} from './导出.js'
// 使用 import {xxx} from 文件路径
//  使用 export 导出的  我们只可以使用 import {}  from 的形式 来导入我们需要的数据
console.log(name);
import {num1 , height} from './导出.js'
console.log(num1);
console.log(height);


import {mul} from './导出.js' // 导入 函数

console.log(mul(1,2)); 

import {Person} from './导出.js' // 导入 类
let p = new Person()
p.run()

// 当我们 使用 export default  导出时 => 我们导入时 可以随意命名
import aaa from './导出.js';
console.log(aaa.hello);
console.log(aaa.age);

// 全部导入
import * as data from './导出.js'
console.log(data);