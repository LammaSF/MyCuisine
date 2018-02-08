const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const shell = require('gulp-shell');
const imagemin = require('gulp-imagemin');

const $ = plugins();

gulp.task('deploy', shell.task([
    'firebase deploy'
]));

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
    gulp.src('public/controllers/*.js')
        .pipe($.plumber())
        .pipe($.minify({
            ext:{
                src: '.js',
                min: '.js'
            },
            noSource: {}
        }))
        .pipe(gulp.dest('dist/controllers'));
});

gulp.task('styles', function() {
    gulp.src('public/css/*')
        .pipe($.plumber())
        .pipe($.cssnano())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('images', function() {
    gulp.src('public/images/*')
        .pipe($.plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});


gulp.task('fonts', function() {
    gulp.src('public/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
});


gulp.task('build:dist', ['configs', 'fonts', 'scripts', 'styles', 'images']);