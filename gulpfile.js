'use strict';

// Dependencies
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var gulpif = require('gulp-if');

// Local environment
// var jsLocal = {
//     'src': 'src/js/**/',
//     'compiled': 'min/js/',
// };

// var cssLocal = {
//     'src': 'pub/src/sass/',
//     'compiled': 'pub/assets/css/'
// };

// var fontsLocal = {
//     'src': 'pub/src/fonts/**/',
//     'compiled': 'pub/assets/css/fonts/'
// };

// var config = require('./config.json');



// global environment var
process.env.NODE_ENV = 'development';

var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });


function swallowError(error) {

    // If you want details of the error in the console
    console.log(error.toString())

    this.emit('end')
}

// Run this to move js files that should be enqueued seperately (not concatenate)
gulp.task('singlejs', function() {
    gulp.src([jsLocal.src + 'singleEnqueue/**/*.js'])
        .pipe($.uglify())
        .pipe(gulp.dest(jsLocal.compiled));
});

// Compile and minify sass and copy to assets folder for production
// gulp.task('sass', function() {
//     //Normal
//     gulp.src([cssLocal.src + 'templates/*.scss', cssLocal.src + 'main.scss'])
//         .pipe($.compass({
//             css: 'pub/assets/css',
//             sass: 'pub/src/sass'
//         }))
//         .pipe($.cssmin())
//         .pipe($.autoprefixer())
//         .pipe(gulp.dest(cssLocal.compiled))
//         .on('error', swallowError)
//         .pipe($.livereload());
// });

// Compile sass and copy to assets folder unminified for development
gulp.task('sassdev', function() {
    //Normal
    gulp.src([cssLocal.src + 'templates/*.scss', cssLocal.src + 'main.scss'])
        .pipe($.compass({
            css: 'pub/assets/css',
            sass: 'pub/src/sass',
            sourcemap: true
        }))
        .pipe(gulp.dest(cssLocal.compiled))
        .on('error', swallowError)
        .pipe($.livereload());
});

// Copy Foundation CSS and JS to assets folder
gulp.task('foundation', function() {
    gulp.src('pub/src/css/foundation/*.css')
        .pipe($.cssmin())
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(cssLocal.compiled));

    gulp.src('pub/src/js/libs/foundation/**')
        .pipe($.concat('foundation.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(jsLocal.compiled));
});

// Copy Foundation CSS and JS to assets folder
gulp.task('modernizr', function() {
    gulp.src('pub/src/js/libs/modernizr/*.js')
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(jsLocal.compiled));
});

// Copy images to assets folder
gulp.task('image', function() {
    gulp.src('pub/src/images/**')
        .pipe(gulp.dest('pub/assets/images'));
});

// Copy fonts to assets folder
gulp.task('fonts', function() {
    gulp.src('pub/src/fonts/**')
        .pipe(gulp.dest('pub/assets/fonts'));
});

// Remove assets folder prior to build
gulp.task('clean', function() {
    return gulp.src('pub/assets/', { read: false })
        .pipe($.clean());
});


function setEnv(string) {
    var env = 'development';
    if (string === 'prod') {
        env = 'production';
    }
    console.log(env);
    process.env.NODE_ENV = env;
}

gulp.task('dev', function() {
    return gulp.start('compileLibs', 'globalScripts', 'scriptCompiler', 'sass');
})

gulp.task('build', function() {
    setEnv('prod');
    return gulp.start('compileLibs', 'globalScripts', 'scriptCompiler', 'sass');
})
