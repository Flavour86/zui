var webpack = require('webpack')
var path = require('path')
var entries = require('./../utils/entries')
var config = require('../config')
var utils = require('../utils')
var webpackConfig = {
  entry: {
    index: utils.resolve('src/index.js'),
    vendor: [
      'jquery'
    ]
  },
  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      },
      {
        test: /\.js$/,
        include: [utils.resolve('src')],
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        loader: `file-loader?name=images/[name]_[hash:base64:5].[ext]`
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    })
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.css', '.json'],
    alias: {
      'common': utils.resolve('src/common'),
      'components': utils.resolve('src/components'),
      'utils': utils.resolve('src/utils')
    }
  }
}
webpackConfig.entry = Object.assign(webpackConfig.entry, entries)

module.exports = webpackConfig
