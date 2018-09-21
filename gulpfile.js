'use strict';
// Require modules
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps'),
    sass = require('gulp-sass');

// Concat files.
gulp.task("concatScripts", function() {
   return gulp.src([
       'js/circle/circle.js',
       'js/circle/autogrow.js'
       ])
   .pipe(maps.init())
   .pipe(concat('global.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

// Minify Files
gulp.task("minifyScripts", ['concatScripts'], function() {
   return gulp.src('js/global.js')
       .pipe(uglify())
       .pipe(rename('global.min.js'))
       .pipe(gulp.dest('js'))
});

// Compile Sass to css
gulp.task('compileSass', function() {
   return gulp.src('sass/global.scss')
   .pipe(sass())
   .pipe(gulp.dest('css'));
});

// Watch for changes of the sass files.
gulp.task('watchSass', function() {
   gulp.watch('scss/**/*.scss', ['compileSass']);
 })


// 
gulp.task('default', ['compileSass', 'concatScripts', 'minifyScripts'], function() {
   console.log('All done!');
});
