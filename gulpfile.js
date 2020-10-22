'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./scss/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],{cascade: false}))
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.parallel('sass'));
});