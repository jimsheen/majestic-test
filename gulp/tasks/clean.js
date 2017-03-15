var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

// Remove assets folder prior to build
gulp.task('clean', function() {

	var CLEAN_DEST = config.defaults.dest;

    return gulp.src(CLEAN_DEST, { read: false })
        .pipe($.clean());
});