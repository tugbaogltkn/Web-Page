const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const reload = browserSync.reload;

gulp.task('browser-sync', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./*.html').on('change',reload);
    gulp.watch('./scss/**/*.scss', ['css']);
});


gulp.task('css', function() {
    return gulp.src('./scss/main.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream())
});
gulp.task('html',(done) => {
    browserSync.reload()
    done()
});
gulp.task('default', ['html', 'css' ]);