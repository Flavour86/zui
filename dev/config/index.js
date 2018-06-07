var path = require('path')
var utils = require('../utils')

var config = {
  prod: {
    env: require('./prod.env.js'),
    assetsRoot: utils.resolve('dist'),
    assetsPublicPath: '/',
    productionSourceMap: true,
    cssSourceMap: false
  },
  dev: {
    env: require('./dev.env.js'),
    port: 8080,
    // assetsRoot: utils.resolve('dist'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    cssSourceMap: true,
    autoOpenBrowser: false,
    noInfo: true
  }
}
var env = utils.isProd ? 'prod' : 'dev'

module.exports = config[env]
