const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: { index: "./src/index.ts" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({})
    ],
  },
  externals: [nodeExternals()],
};
