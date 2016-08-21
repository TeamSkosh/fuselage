'use strict';

let autoprefixer = require('gulp-autoprefixer');
let connect = require('gulp-connect');
let gulp = require('gulp');
let maps = require('gulp-sourcemaps');
let rename = require('gulp-rename');
let sass = require('gulp-sass');

gulp.task('default', ['scss']);

gulp.task('serve', ['connect', 'watch', 'scss']);

gulp.task('connect', () => {
    connect.server({
        livereload: true
    });
});

// livereload for html
gulp.task('html-reload', () => {
    gulp.src('./*.html')
    .pipe(connect.reload());
});

// livereload for styles
gulp.task('scss-reload', ['scss'], () => {
    gulp.src('./css/fuselage.min.css')
    .pipe(connect.reload());
});

gulp.task('scss', () => {
    return gulp.src('./scss/fuselage.scss')
        .pipe(maps.init())
        .pipe(sass({
            includePaths: ['./scss', './scss/components'],
            outputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(maps.write('./'))
        .pipe(rename('fuselage.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
    gulp.watch('./scss/**/*.scss', ['scss-reload']);
    gulp.watch('./*.html', ['html-reload']);
});
