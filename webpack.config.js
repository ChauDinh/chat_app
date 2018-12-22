const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 entry: path.join(__dirname, "src", "public", "components", "main.js"),
 output: {
  path: path.join(__dirname, "dist"),
  publicPath: "/",
  filename: "bundle.js"
 },
 mode: "development",
 plugins: [
  new htmlWebpackPlugin({
   template: path.join(__dirname, "src", "views", "index.html")
  })
 ]
};