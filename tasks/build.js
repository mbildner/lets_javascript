var gulp = require('gulp');
var webpack = require('webpack-stream');
var connect = require('gulp-connect');
var shell = require('gulp-shell')

var webpackConfig = require('../webpack.config.js');

gulp.task('dev', ['webpack','server'], function() {
  gulp.watch(['src/js/**/*.js'], ['webpack']);
});

gulp.task('dev-no-reload', ['webpack', 'server-no-reload'], function() {
  gulp.watch(['src/js/**.js'], ['webpack']);
});

gulp.task('webpack', function() {
  return gulp.src(['src/js/index.js'])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('server', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('server-no-reload', function() {
  connect.server({
    root: 'build',
    livereload: false
  });
});

gulp.task('gapps', ['webpack'], shell.task([
  'node_modules/node-google-apps-script/bin/gapps push'
]))
