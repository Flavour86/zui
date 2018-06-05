var path = require('path')

module.exports.resolve = function (dir) {
  return path.resolve(__dirname, '../../', dir)
}

module.exports.isProd = process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production'
