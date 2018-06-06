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
      'jquery/jquery.js'
    ]
  },
  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath,
    filename: '[name].[chunkhash:7].js'
  },
  module: {
    rules: [
      {
        test: require.resolve('jquery/jquery.js'),
        use: 'expose-loader?jQuery!expose-loader?$'
      },
      {
        test: require.resolve('jquery-ui'),
        use: [
          {
            loader: 'export-loader',
            options: '$widget'
          },
          'script-loader'
        ]
      },
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
        use: ExtractTextPlugin.extract([
          'style-loader',
          'css-loader',
          'postcss-loader'
        ])
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
