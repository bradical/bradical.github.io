var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var bower = require('gulp-bower');
var sourcemaps = require('gulp-sourcemaps');

var config = {
  sassPath: './sass',
  bowerDir: './bower_components'
}

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(config.bowerDir));
});

gulp.task('sass', function() {
  return sass(config.sassPath + '/*.scss', {
      sourcemap: true,
      loadPath: [
        config.bowerDir + '/normalize-scss/sass',
        config.bowerDir + '/support-for/sass',
      ]
    })
    .pipe(rename({suffix: '.min'}))
    .on('error', sass.logError)

    // For inline sourcemaps
    .pipe(sourcemaps.write())

    .pipe(gulp.dest('.'));
});
gulp.task('watch', function (){
  gulp.watch([config.sassPath+'/*.scss'], ['sass']);
});
gulp.task('default', ['bower','sass']);
