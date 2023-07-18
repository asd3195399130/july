//1.导入HTML插件，得到一个构造函数
const HtmlPlugin = require("html-webpack-plugin");

//2.创建HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: "./src/index.html", //指定原文件的存放路径
  filename: "./index.html", //指定生成文件的存放路径
});

module.exports = {
  mode: "development",
  plugins: [htmlPlugin],
  //   entry: {
  //     "./js/first": __dirname + "/src/first.js",
  //     "./js/second": __dirname + "/src/second.js",
  //   },

  output: {
    path: __dirname + "/dist",
    filename: "[name]_bundle_[hash].js",
  },
  module: {
    rules: [
      { test: /\.css/, use: ["style-loader", "css-loader"] },
      { test: /\.sass$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.jpg|png|gif$/, use: ["url-loader?limit=22229"] },
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.jpg|png|gif$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            //明确指定把打包生成的图片文件，存储到dist目录下的image文件夹中
            outputPath: "image",
          },
        },
      },
      {
        test: /\.png|jpg|gif$/,
        use: ["url-loader?limit=1000&outputPath=imagess"],
      },
    ],
  },
  devServer: {
    open: true, //初次打包完成后，自动打开浏览器
    host: "127.0.0.1", //实是打包所使用的主机地址
    port: 80, //实时打包使用的端口号 (在http协议中，端口是80则可以省略不显示)
    hot: true, //热更新
  },
};
