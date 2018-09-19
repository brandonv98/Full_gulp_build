'use strict';

var gulp = require('gulp');

gulp.task('hello', function () {
   console.log('Hey there');
});

// 
gulp.task('default', ['hello'], function() {
   console.log('This is our default task!');
});