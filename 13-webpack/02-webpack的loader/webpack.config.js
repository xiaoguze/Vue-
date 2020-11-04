const { dirname } = require('path');
const path = require('path'); //路径
module.exports = {
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname , 'dist'),
    filename:"bundle.js"
  }
}