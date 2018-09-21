'use strict';
// Require modules
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

// Concat files.
gulp.task("concatScripts", function() {
   gulp.src([
       'js/circle/circle.js',
       'js/circle/autogrow.js'
       ])
   .pipe(concat('global.js'))
   .pipe(gulp.dest('js'));
});


// Compile Sass to css
gulp.task('compileSass', function() {
   gulp.src('sass/global.scss')
   .pipe(sass())
   .pipe(gulp.dest('css'));
});

// Minify Files
gulp.task("minifyScripts", function() {
   gulp.src('js/global.js')
       .pipe(uglify())
       .pipe(rename('global.min.js'))
       .pipe(gulp.dest('js'))
});

// 
gulp.task('default', ['compileSass', 'concatScripts', 'minifyScripts'], function() {
   console.log('All done!');
});
