var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');




// Remove directories defined in DEST below

 var DEST = [
        'node_modules',
        'bower_components',
        'min',
        '.sass-cache',
        'src/libs'
    ]

gulp.task('reset', function() {
    return gulp.src(DEST, { read: false })
        .pipe($.confirm({
            question: function() {
                var files = require('glob').sync('**/*');
                return !files.length ? false : // No file. And do nothing. 
                    files.length + ' files are going to be removed. Are you sure? Y/n';
            },
            input: '_key:y'
        }))
        .pipe($.clean());
});
