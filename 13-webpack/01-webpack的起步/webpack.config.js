const path = require('path'); // 从 node 中查找的文件路径文件
module.exports = {
  // webpack 配置 css 文件loader
  entry:"./src/main.js",//文件入口
  output:{
    path : path.resolve(__dirname , 'dist'), // 文件路径 进行拼接
    filename:"bundle.js" // 文件名字
  }
}