'use strict';
// Require modules
var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('hello', function () {
   console.log('Hey there');
});

// 
gulp.task('default', ['hello'], function() {
   console.log('This is our default task!');
});


// Compile Sass to css
gulp.task('compileSass', function() {
   gulp.src('sass/global.scss')
   .pipe(sass())
   .pipe(gulp.dest('css'));
});


