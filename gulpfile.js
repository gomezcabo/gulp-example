/**
 * Dependencias
 */
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    debug = require('gulp-debug'),
    sass = require('gulp-sass'),
    uncss = require('gulp-uncss'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    ts = require('gulp-typescript');

gulp.task('ts', function() {
    gulp.src('ts/source/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('js/build/ts'));
});

gulp.task('js', ['ts'], function() {
    gulp.src(['js/source/*.js', 'js/build/ts/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('js/build/'))
        .pipe(livereload());
});

gulp.task('scss', function() {
    gulp.src('scss/source/main.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(autoprefixer())
        .pipe(rename('bundle.css'))
        .pipe(uncss({ html: ['index.html'] }))
        .pipe(cleancss({compatibility: 'ie8'}))
        .pipe(gulp.dest('css/build/'))
        .pipe(livereload());
});

gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['js/source/*.js', 'ts/source/*.ts'], ['js']);
    gulp.watch('scss/source/**/*.scss', ['scss']);
    gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['watch']);
