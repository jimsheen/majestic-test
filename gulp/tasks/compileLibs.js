var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

function compileLibs() {

    var isProd = (process.env.NODE_ENV === 'production') ? true : false

    console.log(process.env.NODE_ENV);

    console.log('isProd = ' + isProd);

    gulp.src(['src/libs/jquery/**/*.js', 'src/libs/foundation/**/foundation.js', 'src/libs/foundation/**/*.js'], { base: config.defaults.src })
        .pipe(gulpif(!isProd, $.sourcemaps.init()))
        .pipe($.filelog())
        .pipe(gulpif(!isProd, $.sourcemaps.write()))
        .pipe(gulpif(isProd, $.uglify()))
        .pipe(gulpif(isProd, $.stripDebug()))
        .pipe($.concat('libs.js'))
        .pipe(gulp.dest('min/libs/js'));


    gulp.src('./src/libs/**/*.scss')
        .pipe($.sass().on('error', $.sass.logError))
        .pipe(gulpif(!isProd, $.sourcemaps.init()))
        .pipe($.flatten())
        .pipe(gulpif(!isProd, $.sourcemaps.write()))
        .pipe(gulp.dest('./min/libs/css'))


}

gulp.task('compileLibs', compileLibs);
