var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var utils = require('../utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var baseWebpackConfig = require('./webpack.base.config')

config.productionSourceMap = false

baseWebpackConfig = merge(baseWebpackConfig, {
  devtool: config.productionSourceMap
    ? '#source-map'
    : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin(utils.resolve(config.assetsRoot, '[name].[contenthash:15].css')),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        unused: true,
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
})

module.exports = baseWebpackConfig
