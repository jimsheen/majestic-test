var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

// Watch for sass and js changes
gulp.task('watch', function() {
    $.livereload.listen();
    gulp.watch(config.defaults.js.src + '**/*.js').on('change', function(event) {
        console.log(event);
        // config.defaults.watchChanged = true;
        config.defaults.watchEvent = event;

        if (event.path.indexOf('global') != -1) {
            console.log('global ting');
            gulp.start('globalScripts');
        } else {
            gulp.start('scriptCompiler');
        }
    });

    gulp.watch('src/scss/**/*.scss').on('change', function(event) {
        gulp.start('sass');
    });

});
