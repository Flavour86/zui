var path = require('path')

// amd 异步模块引入配置
var AMD = [
  {test: 'jquery/jquery.js', options: '$'},
  {test: 'jquery-ui', options: '$widget'}
]

module.exports.resolve = function () {
  return path.resolve(__dirname, '../../', ...arguments)
}

module.exports.isProd = process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production'

module.exports.AmdGenerateLoader = function () {
  return AMD.map(function (item) {
    return {
      test: require.resolve(item.test),
      use: [
        {
          loader: 'export-loader',
          options: item.options
        },
        'script-loader'
      ]
    }
  })
}
