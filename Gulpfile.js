var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    color_hwb = require('postcss-color-hwb'),
    cssnext = require('postcss-cssnext');

gulp.task('css', function() {
  var plugins = [
    color_hwb(),
    cssnext()
  ];

  return gulp.src('./css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
})

gulp.task('serve', ['css'], function() {
  gulp.watch('./css/*.css', ['css']);
});

gulp.task('default', ['serve']);
