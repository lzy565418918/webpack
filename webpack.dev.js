// 导入路径模块
const path = require("path");

// 在打包好的目录下自动生成html文件，方便搭建简易服务器
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入清理 /dist 文件夹的插件
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 导入热更新需要的
const webpack = require("webpack");
// 导入打包Vue文件的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 运行环境在node.js中，规范遵守common.js
module.exports = {
  // 模式设置
  mode: "development",
  // 设置打包入口文件
  entry: "./src/index.js",
  // 设置一个出口文件
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  //   module里面是loader，用来打包其他文件
  module: {
    rules: [
      // 打包css文件
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      //   打包less文件
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      //   打包sass文件
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      // 打包图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        ]
      },
      // 打包字体文件
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"]
      },
      // 打包js文件（ES6转ES5）
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      // 打包Vue文件
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  // 设置source map，方便找bug
  devtool: "source-map",
  // 提供了一个简单的 web 服务器，并且能够实时重新加载
  devServer: {
    // 开启服务器
    contentBase: "./dist",
    // 开启 热更新
    hot: true
  },
  // 解析
  resolve: {
    // 可以省略后缀的文件类型
    extensions: [".js", ".css", ".vue"],
    // 设置别名
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@@": path.resolve(__dirname, "src/assets/")
    }
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./index.html"), //指定模板页面
      //将来会根据此页面生成内存中的页面
      //指定生成页面的名称，index.html浏览器才会默认直接打开
      filename: "index.html",
      title: "lbwnb"
    }),
    new webpack.NamedModulesPlugin(),
    //  热更新插件
    new webpack.HotModuleReplacementPlugin(),
    // 打包Vue的插件
    new VueLoaderPlugin()
  ]
};
