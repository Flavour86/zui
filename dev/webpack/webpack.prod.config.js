var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var utils = require('../utils')
var entries = require('./../utils/entries')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var baseWebpackConfig = require('./webpack.base.config')

config.productionSourceMap = false

baseWebpackConfig = merge(baseWebpackConfig, {
  devtool: config.productionSourceMap
    ? '#source-map'
    : false,
  output: {
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals:
    {
    jquery: {
      commonjs: 'jQuery',
      commonjs2: 'jQuery',
      amd: 'jQuery',
      root: '$'
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons',
    //   filename: "commons.js",
    //   chunks: Object.keys(entries),
    //   // children: true,
    //   minChunks: function (module, count) {
    //     const isNodeModules = module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../../node_modules')) === 0
    //     return isNodeModules && count >= 2 || !isNodeModules && count > 2
    //   }
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity
    }),
    new ExtractTextPlugin('[name].css'),
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
