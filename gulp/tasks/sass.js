var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

// Compile and minify sass and copy to assets folder for production
gulp.task('sass', function() {

    var isProd = (process.env.NODE_ENV === 'production');

    console.log(isProd);

    var SASS_SRC = config.sass.src;
    var SASS_DEST = config.sass.dest;

    gulp.src(SASS_SRC)
        .pipe($.compass({
            css: SASS_DEST,
            sass: config.defaults.scss.src
        }))
        .on('error', function(error) {
            // Would like to catch the error here 
            console.log(error);
            this.emit('end');
        })
        .pipe(gulpif(isProd, $.cssmin()))
        .pipe($.autoprefixer())
        .pipe(gulp.dest(SASS_DEST))
        .pipe($.livereload());
});
