var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

// Compile and minify sass and copy to assets folder for production
gulp.task('sass', function() {
    //Normal
    gulp.src('/src/scss/main.scss')
        .pipe($.compass({
            css: config.defaults.scss.dest,
            sass: config.defaults.scss.src
        }))
        .pipe($.cssmin())
        .pipe($.autoprefixer())
        .pipe(gulp.dest(config.defaults.scss.dest))
        .pipe($.livereload());
});