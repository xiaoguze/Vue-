const {merge} = require('webpack-merge')
const baseConfig = require('./base.config')
const uglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(baseConfig , {
  plugins:[
    new uglifyPlugin()
  ]
})