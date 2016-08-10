var gulp = require('gulp');
var webpack = require('webpack-stream');
var connect = require('gulp-connect');

var webpackConfig = require('../webpack.config.js');

gulp.task('dist', ['html-dist']);

gulp.task('js-dist', function() {
  return gulp.src(['src/js/index.js'])
    .pipe(webpack(webpackConfig))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
});
