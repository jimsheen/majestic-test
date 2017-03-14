var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

function compileFoundation() {

    var isProd = (process.env.NODE_ENV === 'production') ? true : false

    console.log(process.env.NODE_ENV);

    console.log('isProd = ' + isProd);

    var components = new Array;
    
    components.push(config.foundation.src + 'foundation.js');

    console.log(config.foundation.components);

    for (var i = 1; i < config.foundation.components.length + 1; i++) {
        components[i] = config.foundation.src + 'foundation.' + config.foundation.components[i-1] + '.js';
        console.log(components[i]);
    }

    console.log(components);

    gulp.src(components, { base: config.defaults.src })
        .pipe(gulpif(!isProd, $.sourcemaps.init()))
        .pipe($.filelog())
        .pipe($.concat('foundation.js'))
        .pipe(gulpif(!isProd, $.sourcemaps.write()))
        .pipe(gulpif(isProd, $.uglify()))
        .pipe(gulpif(isProd, $.stripDebug()))
        .pipe(gulp.dest(config.foundation.dest));
}

gulp.task('compileFoundation', compileFoundation);
