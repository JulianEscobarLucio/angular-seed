var gulp = require('gulp'); // import the gulp module itself
gulp.task('copy-html-files', function () {
   // var stream =  gulp.src('./app/views/**/*.html') // stream source
   var stream =  gulp.src(['./app/view1/**/*.html','./app/view2/**/*.html']) // stream source
        .pipe(gulp.dest('./dist/views/')); // copy to dist/views
    return stream;
});