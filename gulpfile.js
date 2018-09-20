'use strict';
// Require modules
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

// Minify js files.
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

// 
gulp.task('default', ['compileSass'], function() {
   console.log('All done!');
});
