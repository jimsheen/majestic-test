'use strict';

// Dependencies
var gulp = require('gulp');


// require tasks from dir
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });

function setEnv(string) {
    var env = 'development';
    if (string === 'prod') {
        env = 'production';
    }
}

gulp.task('postInstall', function() {
	return gulp.start('mainBowerFiles', 'build');
})

gulp.task('dev', function() {
    return gulp.start('compileLibs', 'globalScripts', 'scriptCompiler', 'sass');
})

gulp.task('build', function() {
    setEnv('prod');
    return gulp.start('clean', 'compileLibs', 'globalScripts', 'scriptCompiler', 'sass');
})
