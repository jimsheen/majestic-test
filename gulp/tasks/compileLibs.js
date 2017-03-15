var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

function compileLibs() {

    var isProd = (process.env.NODE_ENV === 'production') ? true : false

    console.log(process.env.NODE_ENV);

    console.log('isProd = ' + isProd);

    var JS_SRC = config.libs.js.src
    var JS_DEST = config.libs.js.dest;

    gulp.src(JS_SRC, { base: config.defaults.src })
        .pipe(gulpif(!isProd, $.sourcemaps.init()))
        .pipe($.filelog())
        .pipe(gulpif(!isProd, $.sourcemaps.write()))
        .pipe(gulpif(isProd, $.uglify()))
        .pipe(gulpif(isProd, $.stripDebug()))
        .pipe($.concat('libs.js'))
        .pipe(gulp.dest(JS_DEST));


    var SASS_SRC = config.libs.sass.src;
    var SASS_DEST = config.libs.sass.dest;

    gulp.src(SASS_SRC)
        .pipe($.sass().on('error', $.sass.logError))
        .pipe(gulpif(!isProd, $.sourcemaps.init()))
        .pipe($.flatten())
        .pipe(gulpif(!isProd, $.sourcemaps.write()))
        .pipe(gulp.dest(SASS_DEST))


}

gulp.task('compileLibs', compileLibs);
