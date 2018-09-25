'use strict';
// Require modules
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
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
    .pipe(gulp.dest('js'));
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
        .pipe(maps.write('./'))
        .pipe(gulp.dest('styles'));
});

    // Minify css files
gulp.task('styles', ['compileSass'], () => {
    return gulp.src('styles/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename('all.min.css'))
      .pipe(gulp.dest('styles'))
      .pipe(gulp.dest('dist/styles'));
  });

// Clean
gulp.task('clean', function() {
    del(['dist']);
  });

     // Prebuild application
gulp.task('prebuild', ['clean', 'scripts', 'compileSass'], function() {
    return gulp.src('styles/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename('styles.min.css'))
      .pipe(gulp.dest('styles'));
  });

    // Optimize images
gulp.task('images', function() {
    return gulp.src([ 'images/**', 'icons/**', 'fonts/**'], { base: './'})
      .pipe(gulp.dest('dist/content'));
});

  // Build application 
gulp.task('build', ['prebuild'], function() {
      return gulp.src(['styles/styles.min.css', 'js/app.min.js', 'index.html',
      "images/**", 'icons/**', "fonts/**"], { base: './'})
        .pipe(gulp.dest('dist'));
});

  // Minify all files.
gulp.task('minifyFiles', ['minifyScripts', 'minifyCss']);

   // Watch for changes on all files.
gulp.task('watchFiles', function() {
    gulp.watch('sass/**/*.scss', ['compileSass']);
    gulp.watch('js/global.js', ['concatScripts']);
  });

    // Branch for gulp watch files.
gulp.task('serve', ['watchFiles']);

    // Default 
gulp.task('default', ['build'], function() {
   console.log('All done!');
});
