const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: ["babel-polyfill", "./src/js/index.ts"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
        include: path.join(__dirname, "src"),
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,

        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        }),
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  node: {
    fs: "empty",
  },
  plugins: [
    new ExtractTextPlugin("./style.css"),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
