'use strict';
// Require modules
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    del = require('del');


    // Concat JS scripts.
gulp.task("concatScripts", function() {
   return gulp.src([
       'js/circle/circle.js',
       'js/circle/autogrow.js'
       ])
   .pipe(maps.init())
   .pipe(concat('global.js'))
    .pipe(maps.write('./'))
    .pipe(rename('all.map.js'))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream());
});

    // Minify JS scripts
gulp.task("scripts", ['concatScripts'], function() {
   return gulp.src('js/global.js')
       .pipe(uglify())
       .pipe(rename('all.min.js'))
       .pipe(gulp.dest('js'))
       .pipe(gulp.dest('dist/js'));
});

    // Compile Sass to css
gulp.task('compileSass', function() {
    return gulp.src("sass/global.scss")
        .pipe(maps.init())
        .pipe(sass())
        .pipe(rename('all.css'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('styles'))
        .pipe(browserSync.stream());
});

    // Minify css files
gulp.task('styles', ['compileSass'], () => {
    return gulp.src('styles/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename('all.min.css'))
      .pipe(gulp.dest('styles'))
      .pipe(gulp.dest('dist/styles'));
  });

    // Optimize images
gulp.task('images', function() {
    return gulp.src([ 'images/**', 'icons/**', 'fonts/**'], { base: './'})
      .pipe(gulp.dest('dist/content'));
});

    // Static Server + watching scss/html files
gulp.task('serve', ['styles', 'scripts'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/*.scss", ['styles']);
    gulp.watch('./js/*.js', ['scripts']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});


///////=======      Production Build application       ========///////

    // Prebuild
gulp.task('prebuild', ['clean', 'scripts', 'compileSass'], function() {
return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest('dist/styles'));
});

    // Build application 
gulp.task('build', ['prebuild'], function() {
      return gulp.src(['styles/all.css', 'js/all.min.js', 'index.html',
      "images/**", 'icons/**', "fonts/**"], { base: './'})
        .pipe(gulp.dest('dist'));
});

    // Minify all files.
gulp.task('minifyFiles', ['minifyScripts', 'minifyCss']);


    // Clean
gulp.task('clean', function() {
    del(['dist', 'styles']);
});

    // Default 
gulp.task('default', ['build', 'serve'], function() {
   console.log('All done!');
});
