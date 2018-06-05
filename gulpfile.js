var gulp = require('gulp');
var webpack = require('webpack-stream');
var config = require('./dev/config');
var webpackConfig = require('./dev/webpack/webpack.prod.config')

// Run webpack
gulp.task('webpack', function(){
  return gulp.src('src/**/*.{js,css}')
    .pipe(webpack( webpackConfig ))
    .pipe(gulp.dest(config.assetsRoot))
});

// Default task
gulp.task('default', ['webpack']);
