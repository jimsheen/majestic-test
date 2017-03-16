'use strict';

// Dependencies
var gulp = require('gulp');


// require tasks from dir
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });

// used by bower post install hook
gulp.task('postInstall', function() {
	return gulp.start('mainBowerFiles', 'build');
})

gulp.task('dev', function() {
    process.env.NODE_ENV = 'development';
    return gulp.start('compileLibs', 'globalScripts', 'scriptCompiler', 'sass', 'watch');
})

gulp.task('build', function() {
    process.env.NODE_ENV = 'production';
    return gulp.start('clean', 'compileLibs', 'globalScripts', 'scriptCompiler', 'sass');
})
