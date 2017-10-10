const gulp = require('gulp');
const plugins = require('gulp-load-plugins');

const $ = plugins();


gulp.task('configs', function() {
    gulp.src('public/config/*.js')
        .pipe($.minify({
            ext:{
                src: '.js',
                min: '.js'
            },
            noSource: {}
        }))
        .pipe(gulp.dest('dist/configs'));
});

gulp.task('scripts', function() {
    gulp.src('public/controllers/*')
        .pipe($.plumber())
        .pipe($.minify({
            ext:{
                src: '.js',
                min: '.js'
            },
            noSource: {}
        }))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('styles', function() {
    gulp.src('public/styles/*')
        .pipe($.plumber())
        .pipe($.cssnano())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('html', function() {
    gulp.src('public/index.html')
        .pipe($.plumber())
        .pipe($.htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    gulp.src('public/images/**/*')
        .pipe($.plumber())
        .pipe($.imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('views', function() {
    gulp.src('public/views/*')
        .pipe(gulp.dest('dist/views'));
});

gulp.task('fonts', function() {
    gulp.src('public/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build:dist', ['configs', 'fonts', 'scripts', 'styles', 'views', 'html', 'images']);