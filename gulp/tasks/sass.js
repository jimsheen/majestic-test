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
        .pipe(gulpif(!isProd, $.sourcemaps.init()))
        .pipe($.sass().on('error', $.sass.logError))
        .pipe(gulpif(!isProd, $.sourcemaps.write()))
        .pipe(gulpif(isProd, $.cssmin()))
        .pipe($.filelog())
        .pipe($.autoprefixer())
        .pipe(gulp.dest(SASS_DEST))
        .pipe($.livereload());
});
