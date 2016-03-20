var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');


gulp.task('sass', function() {
  return sass('styles.scss')
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
});
gulp.task('watch', function (){
  gulp.watch('*.scss', ['sass']);
});
gulp.task('default', ['sass', 'watch']);
