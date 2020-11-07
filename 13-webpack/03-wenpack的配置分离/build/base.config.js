const path = require('path'); //路径
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin')
const uglifyPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: "./src/main.js", //路口
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "bundle.js",
    // publicPath: 'dist/' // 以后遇到打包 => 所有关于 url的 都会在前面加上前缀  为 dist/xxx
  },
  module: {
    rules: [{
        test: /\.css$/,
        // css-loader 和 style-loader  可能出出现 版本的问题 无法进行打包编译
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|git|jpeg)$/, // 这三种模式结尾的文件都会被 匹配到
        use: [{
          loader: "url-loader",
          options: {
            // 当加载图片的 小于 limit 设置的大小时 => 会将图片编译成 base64 字符串形式
            limit: 8192,
            // 当加载图片的带下 大于 limit 设置的大小时 => 我们需要使用 file-loader 来复制 url-loader来完成工作
            name: 'img/[name].[hash:8].[ext]'
            // img => 某一个文件价下的文件
            // [name] => 图片名字
            // [hash:number] => 随机生成的hash值  保留几位
            // [ext] => 图片原来的扩展名
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, //排除文件
        use: {
          loader: "babel-loader",
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.css', '.js', '.vue'], //省略文件的结尾名
    alias: {
      "vue$": "vue/dist/vue.js"
    }
  },
  plugins: [
    new webpack.BannerPlugin("小泽的学习笔记"),
    new htmlWebpackPlugin({
      // 将 index.html 也作为模板打包到 dist 文件夹中
      template: "index.html"
    }),
    // new uglifyPlugin()
  ],
  
}