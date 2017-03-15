var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

// loop through dependencies from config and append js.src path and .js
// run gulp tasks on newly created deps[] array
function compileScript(src) {

    // global environment variable env defined in dev/production tasks
    var isProd = (process.env.NODE_ENV === 'production') ? true : false;

    // if function fired by watch task do not append js.src again
    var changed = config.defaults.watchChanged;

    // declare dependacy array
    var deps = [];
    for (var i = 0; i < config.scriptCompiler[src].deps.length; i++) {
        if (changed === false) {
            deps[i] = config.defaults.js.src + config.scriptCompiler[src].deps[i] + '.js';
        } else {
            deps[i] = config.scriptCompiler[src].deps[i] + '.js';
        }
    }

    // push template to list of deps (if fired by watch do not append .js again)
    var templateSrc = changed ? 'templates/' + src + '.js' : config.defaults.js.src + 'templates/' + src + '.js'
    deps.push(templateSrc);

    // deps array of newly created path strings
    // conditional gulpif statements depending on env variable
    gulp.src(deps, { base: 'src' })
        .pipe(gulpif(!isProd, $.sourcemaps.init()))
        .pipe($.concat(src + '.js'))
        .pipe($.filelog())
        .pipe(gulpif(!isProd, $.sourcemaps.write()))
        .pipe(gulpif(isProd, $.uglify()))
        .pipe(gulpif(isProd, $.stripDebug()))
        .pipe(gulp.dest(config.defaults.js.dest + 'templates/'))
        .pipe($.livereload())
};


// Run globalScripts() to bundle global scripts
// Loop through config and run the compileScript() function
gulp.task('scriptCompiler', function() {

    var watchEvent = config.defaults.watchEvent;

    if (watchEvent.type === 'changed' && watchEvent.path.indexOf('templates') != -1) {

        // globalScripts();

        var path = require('path');
        var file = watchEvent.path;

        var filename = path.parse(file).base;
        filename = filename.slice(0, -3);

        compileScript(filename);

    } else {

        for (var src in config.scriptCompiler) {
            compileScript(src);
        }
    }



    // reset changed variable for watch task - fixes globbing error
    // config.defaults.watchChanged = true;
});
