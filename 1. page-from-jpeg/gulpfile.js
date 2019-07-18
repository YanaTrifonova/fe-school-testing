const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('scss/main.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('stylesheet'))
}

function watchFiles() {
    gulp.watch('scss/**', {readDelay: 1}, css);
    gulp.watch('index.html')
}

gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));