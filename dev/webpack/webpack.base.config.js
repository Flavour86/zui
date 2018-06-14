var webpack = require('webpack')
var path = require('path')
var fs = require('fs')
var entries = require('./../utils/entries')
var config = require('../config')
var utils = require('../utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJS = require('uglify-js')
var webpackConfig = {
  entry: {
    index: utils.resolve('src/index.js'),
    vendor: [
      'jquery/dist/jquery.min',
      'jquery-ui',
      'moment',
      'bootstrap-datetime-picker/js/bootstrap-datetimepicker.min',
      'icheck'
    ]
  },
  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath,
    filename: '[name].js'
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
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(zh-cn|zh-tw)$/)
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.css', '.json'],
    alias: {
      'common': utils.resolve('src/common'),
      'components': utils.resolve('src/components'),
      'utils': utils.resolve('src/utils'),
      'i18n': utils.resolve('src/i18n')
    }
  }
}
webpackConfig.entry = Object.assign(webpackConfig.entry, entries)
Object.keys(entries).forEach(function (name) {
  if (!utils.isProd) {
    webpackConfig.entry[name] = [utils.resolve('dev/utils/dev-client')].concat(webpackConfig.entry[name])
  }
  var nameSpace = name.indexOf('/') > -1 ?  name.split('/')[1] : name
  var scriptFile = utils.resolve('src/components/' + nameSpace + '/script.js')
  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    filename: name + '.html',
    template: utils.resolve('src/' + name + '.ejs'),
    inject: 'body',
    chunksSortMode: 'manual',
    chunks: ['vendor', 'jquery', name],
    exampleScript: UglifyJS.minify(fs.readFileSync(utils.resolve(scriptFile), 'utf8'), {mangle: {toplevel: true}}).code,
    minify: {
      // removeComments: true,
      // collapseWhitespace: true,
      removeRedundantAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true
    }
  }))
})
module.exports = webpackConfig
