/* eslint-disable */
var config = require('../config')
var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('../webpack/webpack.dev.config')
var utils = require('../utils')

// 端口号
var port = config.port

// 自动打开浏览器
var autoOpenBrowser = !!config.autoOpenBrowser
var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  quiet: config.compiler_quiet,
  noInfo: config.noInfo,
})
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// 模板更改时，进行热更新
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// 使用中间件
app.use(require('connect-history-api-fallback')())
app.use(devMiddleware)
app.use(hotMiddleware)

// 服务目录
app.use(express.static(utils.resolve(config.assetsSubDirectory)))
var uri = 'http://localhost:' + port

console.log('> Starting dev server...')

// 等待webpack处理完，打开浏览器
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  if (autoOpenBrowser && config.env.NODE_ENV === 'development') {
    opn(uri)
  }
  // 服务开启
  app.listen(port)
})
