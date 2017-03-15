var gulp = require('gulp');

var mainBowerFiles = require('gulp-main-bower-files');

gulp.task('mainBowerFiles', function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            overrides: {
                foundation: {
                    main: [
                        './js/foundation/**/*.js',
                        './scss/**/*.scss'
                    ]
                }
            }
        }))
        .pipe(gulp.dest('./src/libs'));
});
