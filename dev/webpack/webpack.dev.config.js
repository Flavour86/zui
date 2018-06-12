var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var utils = require('../utils')
// var entries = require('../utils/entries')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseWebpackConfig = require('./webpack.base.config')

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [utils.resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({'process.env': config.env}),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = webpackConfig
