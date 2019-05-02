const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sh = require('shelljs');

gulp.task('sass', function(done) {
  gulp.src(['src/main.scss'])
  .pipe(sass()).on('error', sass.logError)
  .pipe(gulp.dest('./public/css/'))
  .pipe(cleanCSS({
    specialComments: 0
  }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('./public/css/'))
  .on('end', done);
})