let name = "zeze"
let age = 22
let flag = true

function sum(num1 , num2){
  return num1 + num2
}

export {
  // 使用 export 导出 
  name
}

export var num1 = 100
export var height = 1.88

// 导出函数和类
export function mul (num1 ,num2){
  // 导出 函数
  return num1 * num2
}

// 导出 类
export class Person{
  run(){
    console.log("在奔跑");
  }
}

// 使用 export default  导出  在导出的时候 可以任意命名

let hello = {
  hello:"helloWorld",
  age:22
}
export default hello

// 注意点 => 同一个文件中 不可以同时存在 两个 export default 