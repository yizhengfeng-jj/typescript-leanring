const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/interface/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },

  plugins:[
      new HtmlWebpackPlugin({
          template: "index.html"
      })
  ]
  
};
