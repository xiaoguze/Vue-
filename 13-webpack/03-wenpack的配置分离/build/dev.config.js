const {
  merge
} = require('webpack-merge')
const baseConfg = require('./base.config.js')
module.exports = merge(baseConfg, {
  devServer: { // 本地运行环境的依赖
    contentBase: './dist', // 服务的目标 是当前 打包文件
    inline: true, // 是否进行实时监听变化
  }
})