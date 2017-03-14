var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

// Bundle all scripts in the global folder
function globalScripts() {
    // global environment variable env defined in dev/production tasks
    var isProd = (process.env.NODE_ENV === 'production') ? true : false;

    console.log(process.env.NODE_ENV);

    console.log('isProd = ' + isProd);


    gulp.src([config.defaults.js.src + 'global.js', config.defaults.js.src + 'global/**/*.js'], { base: 'src' })
        .pipe($.sourcemaps.init())
        .pipe($.filelog())
        .pipe($.concat('global.js'))
        .pipe(gulpif(isProd, $.uglify()))
        .pipe(gulpif(isProd, $.stripDebug()))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.defaults.js.dest))
        .pipe($.livereload());
}

gulp.task('globalScripts', function() {
    globalScripts()
});
