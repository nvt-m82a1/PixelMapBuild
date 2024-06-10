const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    app_render: "./build/main/render.js",
    ui_preload: "./build/ui/preload.js"
  },
  devtool: "source-map",
  output: {
    path: __dirname + "/public/js",
    filename: "[name].js"
  }
}
