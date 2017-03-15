var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

// Watch for sass and js changes
gulp.task('watch', function() {
    $.livereload.listen();
    gulp.watch(`${config.defaults.js.src}**/*.js`).on('change', function(event) {
        config.defaults.watchEvent = event;

        // Check if file changed is a global file and fire relevant taks
        if (event.path.indexOf('global') != -1) {
            gulp.start('globalScripts');
        } else {
            gulp.start('scriptCompiler');
        }
    });

    gulp.watch('src/scss/**/*.scss').on('change', function(event) {
        gulp.start('sass');
    });

});
