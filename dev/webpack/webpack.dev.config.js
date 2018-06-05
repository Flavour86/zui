var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var utils = require('../utils')
var entries = require('../utils/entries')
var HtmlWebpackPlugin = require('html-webpack-plugin')
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

Object.keys(entries).forEach(function (name) {
  webpackConfig.entry[name] = [utils.resolve('dev/utils/dev-client')].concat(webpackConfig.entry[name])
  var nameSpace = name.indexOf('/') > -1 ?  name.split('/')[1] : name
  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    filename: name + '.html',
    template: utils.resolve('src/index.ejs'),
    title: 'zui - ' + nameSpace,
    inject: 'body',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true
    }
  }))
})
module.exports = webpackConfig
