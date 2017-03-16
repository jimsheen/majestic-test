var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

// Bundle all scripts in the global folder

gulp.task('globalScripts', function() {
    var isProd = (process.env.NODE_ENV === 'production');

    var GLOBAL_SRC = config.globalScripts.src;
    var GLOBAL_DEST = config.globalScripts.dest;
    var OUTPUT_NAME = config.globalScripts.outputName;

    gulp.src(GLOBAL_SRC, { base: config.defaults.src })
        .pipe($.sourcemaps.init())
        .pipe($.filelog())
        .pipe($.concat(OUTPUT_NAME))
        .pipe(gulpif(isProd, $.uglify()))
        .pipe(gulpif(isProd, $.stripDebug()))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(GLOBAL_DEST))
        .pipe($.livereload());
});
