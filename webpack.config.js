const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // these are used to tell our server what has to be compiled and from where
  // It also tells where to put the outputted compiled version
  entry: path.join(__dirname,'src','index.js'),
  output: {
    path: path.join(__dirname,'build'),
    filename: 'index.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  // this is used so that we can import anything from src folder in relative paths instead of absolute ones.
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  // this tells the webpack-dev-server what files are needed to be served. 
  devServer: {
    contentBase: path.join(__dirname,'src')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src','index.html')
    })
  ]
};