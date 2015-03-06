var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');



gulp.task('lint', function() {
  return gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});




gulp.task('uncompressed', function() {
    return gulp.src('./src/*.js')
        .pipe(gulp.dest('./dist'));
});




gulp.task('compress', function() {
    return gulp.src('./src/*.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += '.min';
            path.extname = '.js'
        }))
        .pipe(gulp.dest('./dist'));
});


/*
    WATCH
*/
gulp.task('watch', function() {

    // Watch the js files
    gulp.watch('./src/*.js', [
        'lint',
        'uncompressed',
        'compress'
    ]);

});



gulp.task('default', [ 'watch' ]);
