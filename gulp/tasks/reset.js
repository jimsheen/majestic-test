
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');



var inquirer = require('inquirer');



gulp.task('reset', function(done) {
    inquirer.prompt([{
        type: 'confirm',
        message: 'Do you really want to reset?',
        default: true,
        name: 'start'
    }], function(answers) {
        if(answers.start) {
            gulp.start('reset-all');
        }
        done();
    });
});

// Remove assets folder prior to build
gulp.task('reset-all', function() {

    var DEST = [
            'node_modules',
            'bower_components',
            'min',
            '.sass-cache',
            'src/libs'
        ]

    return gulp.src(DEST, { read: false })
        .pipe($.clean());
});