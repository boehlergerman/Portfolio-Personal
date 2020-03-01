'use strict';

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const htmlreplace = require('gulp-html-replace');
const imagemin = require('gulp-imagemin');

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
    .pipe(concat('styles.min.css'))
    // Output
    .pipe(gulp.dest('./dist/assets/css'))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function () {
  return gulp.src(['./assets/js/jquery-3.3.1.min.js', './assets/js/jquery.timelinr-0.9.7.js', './assets/js/Chart.bundle.min.js', './assets/js/smooth-scroll.polyfills.min.js', './assets/js/main.js'])
    // Minify the file
    .pipe(terser())
    .pipe(concat('script.min.js'))
    // Output
    .pipe(gulp.dest('./dist/assets/js'))
});

gulp.task('favicon', function () {
  return gulp.src('./favicon.ico')
    .pipe(gulp.dest('./dist'));
});

// Gulp task to minify IMAGES files
gulp.task('images', () =>
  gulp.src('./assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'))
);

// Gulp task move json i18n
gulp.task('i18n', () => 
  gulp.src('./assets/i18n/**/*')
    .pipe(gulp.dest('dist/assets/i18n'))
);

// Gulp task to minify HTML files
gulp.task('pages', function () {
  return gulp.src(['./index.html'])
    .pipe(htmlreplace({
      'css': 'assets/css/styles.min.css',
      'js': 'assets/js/script.min.js'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});


// Gulp task to minify all files
gulp.task('default', gulp.series('i18n', 'styles', 'scripts', 'pages', 'images', 'favicon'));