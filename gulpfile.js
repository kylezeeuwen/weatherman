/* jshint node:true */
'use strict';
// generated on 2015-01-10 using generator-gulp-webapp 0.2.0
var $ = require('gulp-load-plugins')();
var fs = require('fs-extra');
var gulp = require('gulp');
var less = require('gulp-less');
var runSequence = require('run-sequence');

gulp.task('compile-less', function() {
  gulp.src('app/styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('default', function () {
  gulp.start('build');
});

gulp.task('build', ['wiredep', 'compile-coffee', 'compile-less', 'copy'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('clean', function(cb) {
  fs.remove('dist', cb);
});

gulp.task('compile-coffee', function () {
  var gulp_coffee = require("gulp-coffee");
  gulp.src('test/**/*.coffee')
    .pipe(gulp_coffee())
    .pipe(gulp.dest('compiled/test/'));

  gulp.src('app/scripts/**/*.coffee')
    .pipe(gulp_coffee())
    .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('connect', ['build'], function () {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(require('connect-livereload')({port: 35729}))
    .use(serveStatic('dist'))
    .use(serveIndex('dist'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});

gulp.task('copy', function () {
  gulp.src([
    'app/**/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));

  gulp.src([
    'app/bower_components/**/*'
  ], {
    dot: true
  }).pipe(gulp.dest('dist/bower_components'));

  gulp.src([
    'app/data/**/*'
  ], {
    dot: true
  }).pipe(gulp.dest('dist/data'));
});

gulp.task('serve', ['connect', 'watch'], function () {
  require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect'], function () {
  $.livereload.listen();

  // watch for changes
  gulp.watch([
    'dist/*.html',
    'dist/styles/**/*.css',
    'dist/scripts/**/*.js',
    'dist/images/**/*'
  ]).on('change', $.livereload.changed);

  gulp.watch('app/**/*.html', ['copy']);
  gulp.watch('app/images/**/*', ['images']);
  gulp.watch('app/styles/**/*.less', ['compile-less']);
  gulp.watch('app/scripts/**/*.coffee', ['compile-coffee']);

});

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src('app/index.html')
    .pipe(wiredep({exclude: ['bootstrap-sass-official']}))
    .pipe(gulp.dest('app'));
});
