function defaultTask(cb) {

  cb();
}

exports.default = defaultTask

gulp.task('minify-css', function(done) {
  
  return gulp.src('./src/css/*.css')
  .pipe(gulp.dest('dist/css/'))
  done();
});