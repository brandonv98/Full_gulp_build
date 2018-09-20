'use strict';
// Require modules
var gulp = require('gulp'),
    sass = require('gulp-sass');

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
