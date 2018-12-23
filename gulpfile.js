'use strict';

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
var htmlreplace = require('gulp-html-replace');


// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];


// Gulp task to minify CSS files
gulp.task('styles', function () {
  return gulp.src('./assets/css/**/*.css')
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
    // Minify the file
    .pipe(csso())
    .pipe(concat('style.min.css'))
    // Output
    .pipe(gulp.dest('./dist/css'))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function () {
  return gulp.src('./assets/js/**/*.js')
    // Minify the file
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    // Output
    .pipe(gulp.dest('./dist/js'))
});


// Gulp task to minify HTML files
gulp.task('pages', function () {
  return gulp.src(['./index.html'])
    .pipe(htmlreplace({
      'css': './css/styles.min.css',
      'js': './js/script.min.js'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});


// Gulp task to minify all files
gulp.task('default', gulp.series('styles', 'scripts', 'pages'));