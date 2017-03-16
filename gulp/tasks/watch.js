var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');


function swallowError(error) {
    
    // If you want details of the error in the console
    console.log(error.toString())

    this.emit('end')
}


// Watch for sass and js changes
gulp.task('watch', function() {

    var JS_SRC = `${config.defaults.js.src}**/*.js`;
    var SASS_SRC = `${config.defaults.scss.src}**/*.scss`;

    $.livereload.listen();
    gulp.watch(JS_SRC).on('change', function(event) {
        config.defaults.watchEvent = event;

        // Check if file changed is a global file and fire relevant taks
        if (event.path.indexOf('global') != -1) {
            gulp.start('globalScripts');
        } else {
            gulp.start('scriptCompiler');
        }
    });

    gulp.watch(SASS_SRC).on('change', function(event) {
        gulp.start('sass');
    }).on('error', swallowError);

});
