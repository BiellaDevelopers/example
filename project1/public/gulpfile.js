// Includiamo Gulp
var gulp = require('gulp');

// Includiamo i Plugins
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
var notify       = require('gulp-notify');

/**
*
* Compiliamo i file sass
* - Compile
* - Compress/Minify
* - Autoprefixer
*
**/
gulp.task('sass', function () {
  var processors = [
        autoprefixer({browsers: [
                                  "Android 2.3",
                                  "Android >= 4",
                                  "Chrome >= 20",
                                  "Firefox >= 24",
                                  "Explorer >= 8",
                                  "iOS >= 6",
                                  "Opera >= 12",
                                  "Safari >= 6"
                                ]}),
        cssnano
    ];
  return gulp.src('style/*.scss')
     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
     .pipe(postcss(processors))
     .pipe(gulp.dest('style'))
     .pipe(notify('Sass Compilato e Minificato'));
});

/**
*
* BrowserSync.io
* - Watch CSS, JS & HTML for changes
* - View project at: localhost:3000
*
**/
gulp.task('browser-sync', function() {
  browserSync({
    server: {
            baseDir: "./"
        }
  });
});
