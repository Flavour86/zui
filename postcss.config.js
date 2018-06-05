/**
 * Created by Administrator on 2018/6/4.
 */
var webpack = require('webpack')
var config = require('./dev/config')

module.exports = {
  plugins: [
    require('postcss-font-magician'),
    require('postcss-easy-import')({
      glob: true,
      addDependencyTo: webpack
    }),
    require('postcss-url'),
    require('postcss-each'),
    require('precss')(),
    require('cssnano')({
      filterPlugins: false,
      sourcemap: config.cssSourceMap,
      autoprefixer: {
        add: true,
        remove: true,
        browserslist: ['last 2 versions']
      },
      safe: true,
      discardComments: {
        removeAll: true
      }
    })
  ]
}
