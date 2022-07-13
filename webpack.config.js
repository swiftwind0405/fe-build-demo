const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const utils = require('./scripts/utils')

const rootPath = path.resolve(__dirname, '../')
const distPath = path.resolve(rootPath, 'dist')

let output = {
  path: distPath,
  filename: 'temp/[name].js',
  publicPath: '/'
};

module.exports = {
  entry: {
    default: './src/style/index.less',
    dark: './src/style/dark.less',
  },
  mode: 'production',
  target: 'web',
  output: output,
  resolve: {
    modules: [path.resolve(rootPath, 'node_modules')],
    alias: {
      '~': rootPath,
    },
  },
  module: {
    rules: utils.cssRules({extract: true}),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      ignoreOrder: true,
    }),
  ],
};
