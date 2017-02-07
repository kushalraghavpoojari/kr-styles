var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('clean-styles', function(){
  del('dist/*.css');
});

gulp.task('minify-css',['clean-styles'], function() {
  return gulp.src('css/kr-styles.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('kr-styles.min.css'))
    .pipe(gulp.dest('dist'));
});
