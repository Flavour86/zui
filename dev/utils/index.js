var path = require('path')

module.exports.resolve = function () {
  return path.resolve(__dirname, '../../', ...arguments)
}

module.exports.isProd = process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production'
