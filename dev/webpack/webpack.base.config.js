var webpack = require('webpack')
var path = require('path')
var entries = require('./../utils/entries')
var config = require('../config')
var utils = require('../utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackConfig = {
  entry: {
    index: utils.resolve('src/index.js'),
    vendor: [
      'jquery',
      'jquery-ui'
    ]
  },
  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath,
    filename: '[name].[hash:15].js'
  },
  module: {
    rules: [
      ...utils.AmdGenerateLoader(),
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
        use: utils.isProd ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        }) : [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
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
      name: 'vendor',
      minChunks: Infinity
    })
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.css', '.json'],
    alias: {
      'common': utils.resolve('src/common'),
      'components': utils.resolve('src/components'),
      'utils': utils.resolve('src/utils'),
      'lib': utils.resolve('src/lib')
    }
  }
}
webpackConfig.entry = Object.assign(webpackConfig.entry, entries)

module.exports = webpackConfig
